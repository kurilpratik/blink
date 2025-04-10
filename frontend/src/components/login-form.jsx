import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Error from "./error";
import { useState } from "react";
import { set } from "mongoose";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export function LoginForm({ className, ...props }) {
    const { fetchUser } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors([]);
        try {
            setIsLoading(true);
            // console.log(formData);
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    credentials: "include", // <- important for cookies/session
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();
            // console.log("Response data:", data);

            if (!response.ok) {
                toast.error(data.error);
                // setErrors([data.error]);
                return;
            } else {
                console.log("Login successful:", data);
                // toast.success("Login successful");
                await fetchUser(); // Fetch user data after login
                navigate("/dashboard");
                // return data;
            }
        } catch (error) {
            console.error("Error during login:", error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className={"pb-4"}>
                    <CardTitle className={"font-bold text-2xl"}>
                        Login
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <Error message={errors[0]} />
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="address@example.com"
                                    required
                                    onChange={handleInputChange}
                                />
                                {/* <Error message={"Some error"} /> */}
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {/* <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a> */}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="password"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700"
                                    onClick={handleLogin}
                                >
                                    {" "}
                                    {isLoading ? "Loading..." : "Login"}
                                </Button>
                            </div>
                        </div>
                        {/* <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a
                                href="#"
                                className="underline underline-offset-4"
                            >
                                Sign up
                            </a>
                        </div> */}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

import React from "react";
import { Link } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link2, Calendar } from "lucide-react";

function Landing() {
    return (
        <div className="container">
            {/* NAVBAR  */}
            <nav className="flex justify-between items-center py-4">
                <Link className="flex items-center gap-2" to="/">
                    <img src="/logo.svg" alt="logo" className="w-8 h-8" />
                    <h1 className="font-bold text-2xl italic">Blink</h1>
                </Link>
                <ul className="flex gap-6 font-semibold">
                    <li className="bg-blue-50 px-4 py-2 rounded-md text-blue-600">
                        <a href="#">Home</a>
                    </li>
                    <li className="p-2 rounded-md hover:text-blue-600">
                        <a href="#">Product</a>
                    </li>
                    <li className="p-2 rounded-md hover:text-blue-600">
                        <a href="#">Pricing</a>
                    </li>
                    <li className="p-2 rounded-md hover:text-blue-600">
                        <a href="#">Resources</a>
                    </li>
                </ul>
                <div>
                    <Link to="/auth">
                        <Button variant="outline" className="mr-4">
                            Sign In
                        </Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            Blink it!
                        </Button>
                    </Link>
                </div>
            </nav>
            {/* HERO  */}
            <div className="hero py-36 flex">
                <div className="max-w-3xl">
                    <h1 className="text-6xl font-bold">
                        Link Shortener for Business Needs
                    </h1>
                    <p className="max-w-xl text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque architecto illo modi soluta repudiandae ad, at
                        exercitatione?
                    </p>
                    <div className="mt-4">
                        <Link to={"/dashboard"}>
                            <Button
                                className={
                                    "bg-blue-600 hover:bg-blue-700 p-5 mr-4"
                                }
                            >
                                Shorten links for free
                            </Button>
                        </Link>
                        <Link to={"/dashboard"}>
                            <Button variant={"outline"} className={"p-5"}>
                                Shorten links for free
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-20">
                        <div className="flex">
                            <Avatar className={"border-2 border-white size-12"}>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar
                                className={
                                    "border-2 border-white size-12 ml-[-0.5rem]"
                                }
                            >
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar
                                className={
                                    "border-2 border-white size-12 ml-[-0.5rem]"
                                }
                            >
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="ml-2">
                                <div className="flex items-center">
                                    <img
                                        src="/star-icon.svg"
                                        alt="star icon"
                                        className="h-5"
                                    />
                                    <img
                                        src="/star-icon.svg"
                                        alt="star icon"
                                        className="h-5"
                                    />
                                    <img
                                        src="/star-icon.svg"
                                        alt="star icon"
                                        className="h-5"
                                    />
                                    <img
                                        src="/star-icon.svg"
                                        alt="star icon"
                                        className="h-5"
                                    />
                                    <img
                                        src="/star-icon.svg"
                                        alt="star icon"
                                        className="h-5 mr-1"
                                    />
                                    <span className="font-bold text-xl">
                                        4.9
                                    </span>
                                </div>
                                <p className="text-gray-400 text-xs">
                                    from 500+ reviews
                                </p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="max-w-3xl">
                    <Card className={"w-[400px] ml-auto mr-0"}>
                        <CardHeader className={"flex justify-between"}>
                            <h3 className="font-bold">QR Code</h3>
                            <Button variant={"outline"}>Download PNG</Button>
                        </CardHeader>
                        <CardDescription className={"px-6 inline-flex gap-4"}>
                            <img
                                src="/qr.png"
                                alt="qr code"
                                className="h-32 w-32"
                            />
                            <div className="flex flex-col justify-center gap-3">
                                <Link className="flex gap-2">
                                    <Link2 color="#155dfc" />
                                    <span className="font-semibold">
                                        https://pratikkuril.xyz
                                    </span>
                                </Link>
                                <Link className="flex gap-2">
                                    <Calendar color="#155dfc" />
                                    <span className="font-semibold">
                                        10 April 2025
                                    </span>
                                </Link>
                            </div>
                        </CardDescription>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Landing;

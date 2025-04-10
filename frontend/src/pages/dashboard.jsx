import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const response = await fetch("http://localhost:5000/api/auth/logout", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            credentials: "include",
        });

        const data = await response.json();
        if (!response.ok) {
            console.error(data.error);
            return;
        } else {
            console.log("Logout successful:", data);
            navigate("/");
        }
    };
    return (
        <div>
            <Button variant={"outline"} onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
}

export default Dashboard;

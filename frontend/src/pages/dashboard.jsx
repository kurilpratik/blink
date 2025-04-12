import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function Dashboard({ children }) {
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
            {/* SIDEBAR  */}
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full bg-gray-50">
                    <SidebarTrigger className={"sm:hidden"} />
                    <nav className="flex items-center justify-between p-8 bg-white border-b-2">
                        <h1 className="text-xl font-bold">Dashboard</h1>
                        <Button variant={"outline"} onClick={handleLogout}>
                            Logout
                        </Button>
                    </nav>
                </main>
            </SidebarProvider>
        </div>
    );
}

export default Dashboard;

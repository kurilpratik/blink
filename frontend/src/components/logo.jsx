import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" className="w-8 h-8" />
            <h1 className="font-bold text-2xl italic">Blink</h1>
        </div>
    );
};

export default Logo;

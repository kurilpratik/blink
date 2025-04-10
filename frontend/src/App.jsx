import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/landing";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";

import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
            <Toaster />
        </>
    );
}

export default App;

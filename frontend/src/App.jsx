import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/landing";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/protected-route";

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
                <Toaster />
            </AuthProvider>
        </>
    );
}

export default App;

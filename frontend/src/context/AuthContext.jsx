import { createContext, useEffect, useState, useContext } from "react";

// Provide a default value when creating the context
const AuthContext = createContext({
    user: null,
    loading: true,
    fetchUser: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/getMe",
                {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                    },
                    credentials: "include",
                }
            );
            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                console.error("Auth error:", response.status);
                setUser(null);
            }
        } catch (error) {
            console.error("Error fetching user:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

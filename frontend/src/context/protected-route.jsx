import { useAuth } from "./AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <Navigate to="/auth" />;
    }
    return children;
};

export default ProtectedRoute;

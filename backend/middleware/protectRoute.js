import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res
                .status(401)
                .json({
                    error: "Unauthorized: No token found. try loogin in first.",
                });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res
                .status(401)
                .json({ error: "Unauthorized: Invalid token." });
        }

        const user = await User.findOne({ email: decoded.email }).select(
            "-password"
        );
        if (!user) {
            return res
                .status(401)
                .json({ error: "Unauthorized: User not found." });
        }

        req.user = user; // Attach user to the request object for later use
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

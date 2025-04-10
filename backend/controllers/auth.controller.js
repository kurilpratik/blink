// @desc Auth Controls
// Skipping encrypting of password because it is hardcoded in the db at the mooment

import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        if (password != user.password) {
            return res.status(400).json({ error: "Incorrect Password" });
        }
        // On Success
        generateTokenAndSetCookie(user.email, res);
        res.status(200).json({
            email: user.email,
            //password: user.password, Don't want to send password to the client
            urls: user.urls,
        });
    } catch (error) {
        console.log("Error in login controller : ", error.message);
        res.status(500).json({ error: "Internal server error " });
    }
};

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller : ", error.message);
        res.status(500).json({ error: "Internal server error " });
    }
};

export const getMe = async (req, res) => {
    // try {
    //     const user = await User.findById(req.User._id).select("-password");
    //     res.status(200).json(user);
    // } catch (error) {
    //     console.log("Error in getMe controller : ", error.message);
    //     res.status(500).json({ error: "Internal server error " });
    // }
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
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

        res.status(200).json(user);
    } catch (error) {
        console.error("Error in getMe:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

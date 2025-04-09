// @desc Auth Controls
// Skipping encrypting of password because it is hardcoded in the db at the mooment

import User from "../models/user.model.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Incorrect Password" });
        }
        // On Success
        res.status(200).json({
            email: user.email,
            urls: user.urls,
        });
    } catch (error) {
        console.log("Error in login controller : ", error.message);
        res.status(500).json({ error: "Internal server error " });
    }
};

export const logout = async (req, res) => {
    res.json({
        data: "You hit the logout endpoint",
    });
};

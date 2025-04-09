import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        urls: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Url",
            default: [],
        },
    },
    { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

export default User;

import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDb.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Method to test by logging any route that is hit
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Ensure next() is called
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    connectMongoDB();
});

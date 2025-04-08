import express from "express";

import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Method to test by logging any route that is hit
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Ensure next() is called
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

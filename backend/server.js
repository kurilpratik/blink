import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Method to test by logging any route that is hit
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Ensure next() is called
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

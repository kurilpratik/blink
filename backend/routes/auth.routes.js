import express from "express";
import { getMe, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/getMe", getMe);

export default router;

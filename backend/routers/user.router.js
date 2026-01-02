import express from "express";
import { registerUser, loginUser, logoutUser, getUser, updateUser } from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", isAuth, logoutUser)
router.get("/get/:id", isAuth, getUser)
router.put("/update/:id", isAuth, updateUser)

export default router;
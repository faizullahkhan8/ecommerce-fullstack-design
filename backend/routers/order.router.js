import { Router } from "express";
import { isAuth } from "../middlewares/auth.middleware.js";
import { placeOrder } from "../controllers/order.controller.js";

const router = new Router();

router.post("/place-order", isAuth, placeOrder)

export default router
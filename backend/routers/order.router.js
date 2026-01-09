import { Router } from "express";
import { authorize, isAuth } from "../middlewares/auth.middleware.js";
import { getAllOrder, placeOrder } from "../controllers/order.controller.js";

const router = new Router();

router.post("/place-order", isAuth, placeOrder);
router.get("/get-all", isAuth, authorize("admin"), getAllOrder);

export default router;

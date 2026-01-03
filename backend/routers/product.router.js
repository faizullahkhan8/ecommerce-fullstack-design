import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js"
import { createProduct } from "../controllers/product.controller.js";
import { authorize, isAuth } from "../middlewares/auth.middleware.js";
import { getAllProducts } from "../controllers/product.controller.js";

const router = Router();

router.post("/create", isAuth, authorize(["admin"]), upload.single("image"), createProduct)
router.get("/all", isAuth, getAllProducts)

export default router
import expressAsyncHandler from "express-async-handler";
import { getLocalOrderModel } from "../config/localDb.js";

export const placeOrder = expressAsyncHandler(async (req, res, next) => {
    const OrderModel = getLocalOrderModel();

    if (!OrderModel) {
        return next(new Error("Order model not found"))
    }

    const { items, totalAmount, shippingAddress, payment } = req.body;

    if (!items || !totalAmount || !shippingAddress || !payment) {
        return next(new Error("All fields are required"))
    }

    const order = new OrderModel({
        user: req.user._id,
        items,
        totalAmount,
        shippingAddress,
        payment,
    })

    await order.save();

    return res.status(201).json({
        message: "Order placed successfully",
        order
    });
})
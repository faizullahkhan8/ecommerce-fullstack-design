import expressAsyncHandler from "express-async-handler";
import { getLocalOrderModel, getLocalProductModel } from "../config/localDb.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const placeOrder = expressAsyncHandler(async (req, res, next) => {
    const OrderModel = getLocalOrderModel();
    const ProductModel = getLocalProductModel();

    if (!OrderModel || !ProductModel) {
        return next(new Error("Order model not found"));
    }

    const { items, recipient, payment, grandTotal } = req.body;

    if (items.length < 1 || !recipient || !payment || !grandTotal) {
        return next(new Error("All fields are required"));
    }

    items.forEach(async (prod) => {
        let tempProd = await ProductModel.findById(prod.product.toString());
        tempProd.stock -= prod.quantity;
        tempProd.save({ validateModifiedOnly: true });
    });

    const order = new OrderModel({
        userId: req.user._id,
        items,
        grandTotal,
        recipient,
        payment,
    });

    await order.save();

    return res.status(201).json({
        success: true,
        message: "Order placed successfully",
        order,
    });
});

export const getAllOrder = expressAsyncHandler(async (req, res, next) => {
    const OrderModel = getLocalOrderModel();

    if (!OrderModel) return next(new ErrorResponse("Model not found!", 400));

    const allOrders = await OrderModel.find({});

    return res.status(200).json({
        success: true,
        message: "All orders fatched.",
        orders: allOrders,
    });
});

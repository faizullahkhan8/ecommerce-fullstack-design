import expressAsyncHandler from "express-async-handler";
import { getLocalProductModel } from "../config/localDb.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const createProduct = expressAsyncHandler(async (req, res, next) => {
    const ProductModel = getLocalProductModel();
    if (!ProductModel) return next(new ErrorResponse("Product model not found", 500))

    const { name, price, description, category, stock } = JSON.parse(req.body.data);
    if (!name || !price || !description || !category || !stock) return next(new ErrorResponse("All fields are required", 400))

    const isProductExist = await ProductModel.findOne({ name })
    if (isProductExist) return next(new ErrorResponse("Product already exists", 400))


    const product = await ProductModel.create({
        name,
        price,
        description,
        category: "6957e130246111e3f7f29ad4",
        stock,
        image: 'public/images/product-images/' + req.file.filename
    })

    return res.status(201).json({
        success: true,
        message: "Product created successfully",
        product
    })
})

export const getAllProducts = expressAsyncHandler(async (req, res, next) => {
    const ProductModel = getLocalProductModel();
    if (!ProductModel) return next(new ErrorResponse("Product model not found", 500))

    const products = await ProductModel.find()

    return res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        products
    })
})
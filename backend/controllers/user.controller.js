import asyncHandler from "express-async-handler";
import { getLocalUserModel } from "../config/localDb.js";
import { generateToken, setCookie } from "../utils/jwt.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const registerUser = asyncHandler(async (req, res, next) => {

    const UserModel = getLocalUserModel()

    if (!UserModel) {
        return next(new ErrorResponse("User model not initiated.", 404))
    }

    const { name, email, password } = req.body


    if (!name || !email || !password) {
        return next(new ErrorResponse("All fields are required", 400))
    }

    const isEmailExists = await UserModel.findOne({ email })


    if (isEmailExists) {
        return next(new ErrorResponse("Email already exists", 400))
    }

    let user;

    try {
        user = await UserModel.create({ name, email, password });
    } catch (error) {
        console.error("CREATE USER ERROR:", error);
        return next(error);
    }


    const refreshToken = generateToken(user, "7d", process.env.JWT_REFRESH_SECRET)
    const accessToken = generateToken(user, "1d", process.env.JWT_ACCESS_SECRET)


    setCookie(res, refreshToken, 1000 * 60 * 60 * 24 * 7, "refreshToken")
    setCookie(res, accessToken, 1000 * 60 * 60 * 24, "accessToken")

    return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: user
    })
})


export const loginUser = asyncHandler(async (req, res, next) => {
    const UserModel = getLocalUserModel()

    if (!UserModel) {
        return next(new ErrorResponse("User model not initiated.", 404))
    }

    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorResponse("All fields are required", 400))
    }

    const user = await UserModel.findOne({ email })

    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 400))
    }

    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorResponse("Invalid credentials", 400))
    }

    const refreshToken = generateToken(user, "7d", process.env.JWT_REFRESH_SECRET)
    const accessToken = generateToken(user, "1d", process.env.JWT_ACCESS_SECRET)

    setCookie(res, refreshToken, 1000 * 60 * 60 * 24 * 7, "refreshToken")
    setCookie(res, accessToken, 1000 * 60 * 60 * 24, "accessToken")

    return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user: user
    })
})

export const logoutUser = asyncHandler(async (req, res, next) => {

    res.clearCookie("refreshToken")
    res.clearCookie("accessToken")

    return res.status(200).json({
        success: true,
        message: "User logged out successfully"
    })
})

export const getUser = asyncHandler(async (req, res, next) => {
    const UserModel = getLocalUserModel()

    if (!UserModel) {
        return next(new ErrorResponse("User model not initiated.", 404))
    }

    const user = await UserModel.findById(req.params.id)

    if (!user) {
        return next(new ErrorResponse("User not found", 404))
    }

    return res.status(200).json({
        success: true,
        message: "User fetched successfully",
        user: user
    })
})

export const updateUser = asyncHandler(async (req, res, next) => {
    const UserModel = getLocalUserModel()

    if (!UserModel) {
        return next(new ErrorResponse("User model not initiated.", 404))
    }

    const userId = req.params.id
    const { name, phone, address } = req.body;

    const user = await UserModel.findById(userId)

    if (!user) {
        return next(new ErrorResponse("User not found", 404))
    }

    user.name = name || user.name
    user.phone = phone || user.phone
    address && user.addresses.push({ address })

    const updatedUser = await user.save({ validateModifiedOnly: true })

    return res.status(200).json({
        success: true,
        message: "User updated successfully",
        user: updatedUser
    })
})

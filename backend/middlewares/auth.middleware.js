import { getLocalUserModel } from "../config/localDb.js"
import { verifyToken } from "../utils/jwt.js"
import { ErrorResponse } from "../utils/ErrorResponse.js"
import expressAsyncHandler from "express-async-handler"

export const isAuth = expressAsyncHandler(async (req, res, next) => {

    const UserModel = getLocalUserModel()

    if (!UserModel) {
        return next(new ErrorResponse("User model not initiated.", 404))
    }

    const token = req.cookies?.accessToken

    if (!token) {
        return next(new ErrorResponse("Unauthorized", 401))
    }

    const decoded = verifyToken(token, process.env.JWT_ACCESS_SECRET)

    if (!decoded) {
        return next(new ErrorResponse("Unauthorized", 401))
    }

    const user = await UserModel.findById(decoded.id)

    if (!user) {
        return next(new ErrorResponse("User not found", 404))
    }

    req.user = user
    next()
})

export const authorize = (...role) => expressAsyncHandler(async (req, res, next) => {
    if (!role.includes(req.user.role)) {
        return next(new ErrorResponse("Unauthorized", 401))
    }
    next()
})
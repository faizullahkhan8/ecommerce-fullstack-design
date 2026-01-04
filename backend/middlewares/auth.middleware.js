import { getLocalUserModel } from "../config/localDb.js"
import { verifyToken } from "../utils/jwt.js"
import { ErrorResponse } from "../utils/ErrorResponse.js"
import expressAsyncHandler from "express-async-handler"

export const isAuth = expressAsyncHandler(async (req, res, next) => {

    const UserModel = getLocalUserModel();

    if (!UserModel) {
        return next(new ErrorResponse("User model not found", 404))
    }

    const token = req.cookies?.accessToken;

    if (!token) {
        return next(new ErrorResponse("Access token missing", 401));
    }

    try {
        const decoded = verifyToken(token, process.env.JWT_ACCESS_SECRET);

        const user = await UserModel.findById(decoded.id)

        if (!user) {
            return next(new ErrorResponse("User not found", 404));
        }

        req.user = user

        next();
    } catch (error) {
        console.log(error)
        if (error.name === "TokenExpiredError") {
            return next(new ErrorResponse("Access token expired", 401));
        }
        return next(new ErrorResponse("Invalid access token", 401));
    }
});

export const authorize = (role = []) => expressAsyncHandler(async (req, res, next) => {
    if (!role.includes(req.user.role)) {
        return next(new ErrorResponse("Unauthorized", 401))
    }
    next()
})
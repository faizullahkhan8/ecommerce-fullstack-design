import { getLocalUserModel } from "../config/localDb.js"
import { verifyToken } from "../utils/jwt.js"
import { ErrorResponse } from "../utils/ErrorResponse.js"
import expressAsyncHandler from "express-async-handler"

export const isAuth = expressAsyncHandler(async (req, res, next) => {

    console.log("pass:1")

    const UserModel = getLocalUserModel()

    console.log("pass:2")

    if (!UserModel) {
        return next(new ErrorResponse("User model not initiated.", 404))
    }

    console.log("pass:3")

    const token = req.cookies?.accessToken

    if (!token) {
        return next(new ErrorResponse("Unauthorized", 401))
    }

    console.log("pass:4")

    const decoded = verifyToken(token, process.env.JWT_ACCESS_SECRET)

    console.log("pass:5")

    if (!decoded) {
        return next(new ErrorResponse("Unauthorized", 401))
    }

    console.log("pass:6")

    const user = await UserModel.findById(decoded.id)

    console.log("pass:7")

    if (!user) {
        return next(new ErrorResponse("User not found", 404))
    }

    console.log("pass:8")

    req.user = user
    next()
})
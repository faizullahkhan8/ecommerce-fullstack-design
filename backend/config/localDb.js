import mongoose from "mongoose";
import userSchema from "../models/user.model.js";
import productSchema from "../models/product.model.js";

let localDbConnection = null
let localUserModel
let localProductModel

export const connectToDB = () => {
    localDbConnection = mongoose.createConnection(process.env.MONGO_URL);

    if (localDbConnection) {
        console.log(`Connected to MongoDB: ${localDbConnection.host}`);
    }

    localUserModel = localDbConnection.model('User', userSchema);
    localProductModel = localDbConnection.model('Product', productSchema);
}

export const getLocalUserModel = () => localUserModel || null
export const getLocalProductModel = () => localProductModel || null

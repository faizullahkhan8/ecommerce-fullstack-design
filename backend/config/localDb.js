import mongoose from "mongoose";
import userSchema from "../models/user.model.js";

let localDbConnection = null
let localUserModel 

export const connectToDB = () => {
        localDbConnection = mongoose.createConnection(process.env.MONGO_URL);

        if(localDbConnection.host){
            console.log(`Connected to MongoDB: ${localDbConnection.host}`);
        }

        localUserModel = localDbConnection.model('User', userSchema);
}

export const getLocalUserModel = () => localUserModel || null
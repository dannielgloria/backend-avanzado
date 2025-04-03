import mongoose from "mongoose";
import { mongoDomain, mongoPWD, mongoUser, mongoDb } from "../config/constants.js"

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDomain+mongoUser+':'+mongoPWD+'@'+mongoDb);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;
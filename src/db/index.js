import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n✅ MongoDB connected successfully !! DB HOST: ${connectionInstance.connection.host}`);
        return connectionInstance;
    } catch (error) {
        console.log("⚠️  MongoDB connection error:", error.message);
        console.log("ℹ️  Server will start without database connection. Some features may not work.");
        return null;
    }
}

export default connectDB;

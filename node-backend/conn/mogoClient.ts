import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
    }
};
// node modules import
import mongoose from "mongoose";
import dotenv from 'dotenv';

// loading environment variables
dotenv.config();

/**
 * connecting Async : best practice
 */
export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } 
    catch (error) {
        console.log('Connection to MongoDB has failed', error.message);
    }
};

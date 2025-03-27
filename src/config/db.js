import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dannielgloria:iySbmxO7sZFox4f9@ejerciciokata.74apu.mongodb.net/');
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;
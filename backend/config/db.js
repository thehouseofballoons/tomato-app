import mongoose from "mongoose";

export const connectDB = async () => {
await mongoose.connect('no you wont :)').then(()=>console.log("Connected to MongoDB"));
}

import mongoose from "mongoose";

export const connectDB = async () => {
await mongoose.connect('mongodb+srv://mohammedkammed:DBI9W5raX2g6YVLD@cluster0.qvdiwma.mongodb.net/MYPROJECTMERN').then(()=>console.log("Connected to MongoDB"));
}
import mongoose from "mongoose";

export const myconnect = async ({uri})=>{
    console.log("connecting to db");

    await mongoose.connect(uri);

    console.log("Db connected successfully");
}
import { connectionStr } from "@/library/db";
import { Product } from "@/library/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function GET() {
//     let data = [];
//     try {
//         await mongoose.connect(connectionStr);
//         data = await Product.find();
//     } catch (error) {
//         data = { success: false };
//     }
//     return NextResponse.json({ result:data, success: true });
// }

export async function GET(){
    let data = [];
    let success = true;
    try{
        mongoose.connect(connectionStr);
        data = await Product.find();
    } catch(error){
        data = {result:"error"}
        success = false
    }
    return NextResponse.json({result:data, success})
}

export async function POST(request) {
    const payload = await request.json();
  await mongoose.connect(connectionStr);
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result, success: true });
}

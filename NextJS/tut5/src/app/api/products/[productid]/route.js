import { connectionStr } from "@/library/db";
import { Product } from "@/library/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content){
    const productid = content.params.productid;
    const filter = {_id:productid};
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(connectionStr);
    const result = await Product.findOneAndUpdate(filter, payload )

    return NextResponse.json({result, success:true})
}

export async function GET(request, content){
    const productId = content.params.productid;
    const record = {_id:productId};
    await mongoose.connect(connectionStr);
    const result = await Product.findById(record)

    return NextResponse.json({result, success:true})
}

export async function DELETE(request, content){
    const productId = content.params.productid;
    const record = {_id:productId}
    await mongoose.connect(connectionStr);
    const result = await Product.deleteOne(record);
    return NextResponse.json({result, success: true})
}
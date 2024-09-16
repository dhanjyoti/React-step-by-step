import { NextResponse } from "next/server";
import {writeFile} from "fs/promises";

export async function POST(req){
    console.log("api hitted")
    const data = await req.formData();
    const file = data.get('file');
    if(!file){
        return NextResponse.json({"message":"no image found", success: false})
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`
    await writeFile(path, buffer);
    try {
        await writeFile(path, buffer);
        return NextResponse.json({ message: "File uploaded", success: true });
    } catch (error) {
        return NextResponse.json({ message: `File upload failed: ${error.message}`, success: false });
    }
}
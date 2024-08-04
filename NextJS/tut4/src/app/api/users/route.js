import { NextResponse } from "next/server";
import {user} from "@/util/db";

export function GET(req){
    const data = user;
    return NextResponse.json(data, {status:200})
}

export async function POST(request){
    let payload = await request.json();
    console.log(payload)

    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"require field not found", success: false},{status:400})
    }
    return NextResponse.json({result:"New User Created", success:true},{status:201})
}
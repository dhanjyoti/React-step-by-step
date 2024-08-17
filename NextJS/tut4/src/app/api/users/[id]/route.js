import { NextResponse } from "next/server";
import {user} from "@/util/db";

export function GET(req, content){

    const userData = user.filter((item)=>item.id == content.params.id)

    return NextResponse.json(
        userData.length == 0 ? 
        {result: "No dota found", success:false} : {result:userData[0], success:true}, 
        {status:200}
    )
}

export async function PUT(request, content){
    let payload = await request.json();

    payload.id = content.params.id;
    console.log(payload)
    if(!payload.id || !payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"request data is not valid", succcess:false}, {status:400})
    }
    return  NextResponse.json({result:payload, success:true}, {status:200})
}

export function DELETE(request, content){
    let id = content.params.id
    if(id){
        return NextResponse.json({result:"User deleted",  success:true}, {status:200})
    } else {
        return NextResponse.json({result:"Internal error, Please  try after some time", success:false},  {status:400})
    }
}
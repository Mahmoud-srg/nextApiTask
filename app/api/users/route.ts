import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
//CRUD 
let users:{ id: number , name: string}[]=[

    { "id":0, "name": "Mahmoud"},
    {"id":1,"name":"Ragab"},
    {"id":2,"name":"serag"},

    { "id":3, "name": "Ali"},
    {"id":4,"name":"Khaled"},
    {"id":5,"name":"Sayed"},

    { "id":6, "name": "Amira"},
    {"id":7,"name":"sara"},
    {"id":8,"name":"aya"},
    {"id":9,"name":"hoda"},
];
export function GET(request:NextRequest){
 return NextResponse.json(users)
}

export async function POST(request:NextRequest){

   const body = await request.json();
   const validation = schema.safeParse(body)
   if(!validation.success)
    return NextResponse.json({error:' Name is Required'},{status:400})
    users.push(body)
 return NextResponse.json({id:1,name:body.name}, {status:201}) 
}
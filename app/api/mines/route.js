import connectDB from "@/lib/connectDB"
import Mine from "@/lib/models/Mine";
// import mines from "@/lib/models/Mine";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectDB();
        const mines = await Mine.find();
        return new NextResponse(JSON.stringify({ message: "These are the mines", mine: mines }), { status: 200 })
    } catch (e) {
        console.log("Error in fetching mines (GET) " + e.message, { status: 500 })
    }
}


export const POST = async (req) => {
    try {
        const body = await req.json();
        await connectDB();
        const newUser = new Mine(body)
        await newUser.save()
        return new NextResponse(JSON.stringify({ message: "Mine was created", user: newUser }), { status: 200 })
    }
    catch (e) {
        console.log("Error in creating mine (POST) " + e.message, { status: 500 })
    }
}
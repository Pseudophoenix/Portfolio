import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();
export async function POST(req: NextRequest) {
    const body = await req.json();
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    return NextResponse.json({
        body:body,
        name:"Alok"
    })
}
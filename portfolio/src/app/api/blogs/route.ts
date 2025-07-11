import { NextResponse, NextRequest } from "next/server";
// import { PrismaClient } from "@/generated/prisma";
// import { v4 as uuidv4 } from 'uuid';
// const client = new PrismaClient();
import client from "@/db/index";
export async function GET(req: NextRequest) {
    const res = NextResponse.next();
    // Set CORS headers
    res.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace '*' with your React app's URL (e.g., 'http://localhost:3001')
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests (OPTIONS)
    if (req.method === 'OPTIONS') {
        return NextResponse.json({}, { status: 200, headers: res.headers });
    }
    const blogs = await client.blog.findMany();
    return NextResponse.json({ "blogs": blogs },
        {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5173',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        }
    );
}
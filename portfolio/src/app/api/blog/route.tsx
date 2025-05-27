import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { v4 as uuidv4 } from 'uuid';
import client from "@/db/index";
export async function POST(req: NextRequest, res: NextResponse) {
    const id = uuidv4();
    const response = NextResponse.next();
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace '*' with your React app's URL (e.g., 'http://localhost:3001')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests (OPTIONS)
    if (req.method === 'OPTIONS') {
        return NextResponse.json({}, { status: 200, headers: response.headers });
    }
    const body = await req.json();
    const blog = await client.blog.create({
        data: {
            id: id,
            html: body.html,
            css: body.css,
            title: body.title
        }
    });
    console.log(blog);
    return NextResponse.json({ "message": "Saved the blog" }, {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
export async function GET(req: NextRequest, res: NextResponse) {
    const response = NextResponse.next();
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace '*' with your React app's URL (e.g., 'http://localhost:3001')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests (OPTIONS)
    if (req.method === 'OPTIONS') {
        return NextResponse.json({}, { status: 200, headers: response.headers });
    }
}
export async function DELETE(req: NextRequest) {

    // const body =  req;
    // console.log(body);
    // // const blog = await client.blog.create({
    // //     data: {
    // //         id: id,
    // //         html: body.html,
    // //         css: body.css,
    // //         title: body.title
    // //     }
    // // });
    // // console.log(blog);
    // return NextResponse.json({ "message": "Saved the blog" });
    // // const body = await req.json();
    // // console.log(body);
    // // const result = await client.blog.delete({ where: { id: body.blogId } });
    // // return NextResponse.json({ "message": "Blog deleted", "result": result }, {
    // //     headers: {
    // //         'Access-Control-Allow-Origin': 'http://localhost:5173',
    // //         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    // //         'Access-Control-Allow-Headers': 'Content-Type',
    // //     },
    // // });
    try {
        const body = await req.json();
        if (!body.blogId) {
            return NextResponse.json(
                { error: "blogId is required" },
                { status: 400 }
            );
        }

        const result = await client.blog.delete({ where: { id: body.blogId } });
        return NextResponse.json({ "message": "Blog deleted", "result": result }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5173',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });

    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
export async function PUT(req: NextRequest) {

    try {
        const body = await req.json();
        if (!body.blog.id) {
            return NextResponse.json(
                { error: "blog is required" },
                { status: 400 }
            );
        }
        console.log(body.blog);
        // const blog = await client.blog.create({
        //     data: {
        //         id: id,
        //         html: body.html,
        //         css: body.css,
        //         title: body.title
        //     }
        // });

        const result = await client.blog.update({
            where: {
                id: body.blog.id // Assuming your blog post has an ID field
            },
            data: {
                // Spread all the fields you want to update from body.blog
                id: body.blog.id ,
                title: body.blog.title,
                html: body.blog.html,
                css: body.blog.css,
                // Include any other fields that might need updating
                // updatedAt: new Date() // Optionally update the timestamp
            }
        });
        return NextResponse.json({ "message": "Blog updated", "result": result }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5173',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
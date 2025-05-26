import { request } from "http";
import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <div className={"border-l-amber-50"}>Hey Buddy</div>
//     </div>
//   );
// }
import { NextRequest, NextResponse } from 'next/server';
export async function GET(request: NextRequest) {
    const userAgent = request.headers.get('user-agnet');
    const url = request.nextUrl;
    const name = url.searchParams.get('name') || "world";
    return NextResponse.json({
        message: `Hello ${name}`,
        userAgent
    });
}
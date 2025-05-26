// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the request headers and set CORS headers
  const headers = new Headers(request.headers);
  headers.set('Access-Control-Allow-Origin', '*'); // Replace '*' with your React app's URL (e.g., 'http://localhost:3001')
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests (OPTIONS)
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: headers,
    });
  }

  // For non-OPTIONS requests, proceed with the original request
  const response = NextResponse.next({
    request: {
      headers: headers,
    },
  });

  return response;
}

// Apply middleware to specific paths (e.g., all API routes)
export const config = {
  matcher: '/api/:path*',
};
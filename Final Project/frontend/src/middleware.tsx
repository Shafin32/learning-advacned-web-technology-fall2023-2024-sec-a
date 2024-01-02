import { NextResponse, NextRequest } from "next/server"


export default function middleware(request: NextRequest){

    const token = request.cookies.has('token');

    if(!token){
        if(request.nextUrl.pathname != '/login'){
            return NextResponse.redirect(new URL('/login',request.url))
        }
    }
}

export const config = {
    matcher: [
        '/system/:path*',
        '/profile/:path*',
        '/subscription/:path*',
        '/payment/:path*',
        '/comment/:path*',
        '/request/:path*',
        '/search/:path*',
        '/template/:path*'
    ],
}
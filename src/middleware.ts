import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/admin', '/admin/:path*', '/auth/admin-login', '/'],
};

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const url = request.nextUrl;

    if (
        token &&
        (url.pathname === '/auth/admin-login')
    ) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    if (!token && url.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/auth/admin-login', request.url));
    }

    return NextResponse.next();
}
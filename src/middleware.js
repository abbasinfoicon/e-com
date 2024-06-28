import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.clone();
    const path = req.nextUrl.pathname;
    const token = req.cookies.get('token');

    // Public paths that should not be accessible when logged in
    const publicPaths = ['/login', '/register', '/forgot-password', '/reset-password'];

    // Protected paths that require authentication
    const protectedPaths = [
        '/dashboard',
        '/dashboard/:path*',
        '/user',
        '/user/:path*',
        '/vendor',
        '/vendor/:path*',
        '/wishlist'
    ];

    const isPublicPath = publicPaths.includes(path);
    const isProtectedPath = protectedPaths.some(protectedPath => new RegExp(`^${protectedPath.replace(/:\w+\*?/g, '.*')}$`).test(path));

    // If the user is authenticated and tries to access a public path, redirect to home
    if (token && isPublicPath) {
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    // If the user is not authenticated and tries to access a protected path, redirect to login
    if (!token && isProtectedPath) {
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    // Allow the request if it's not one of the protected or public paths
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard',
        '/dashboard/:path*',
        '/user',
        '/user/:path*',
        '/vendor',
        '/vendor/:path*',
        '/login',
        '/register',
        '/forgot-password',
        '/reset-password',
        '/wishlist'
    ],
};

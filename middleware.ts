import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ACCESS_TOKEN } from './api/api.constant';

export function middleware(request: NextRequest) {
	const publicRoutes = ['/sign-in', '/sign-up'];
	const { pathname } = request.nextUrl;
	const hasAccessToken = request.cookies.has(ACCESS_TOKEN);
	const isPublicRoute = publicRoutes.includes(pathname);

	if (hasAccessToken && isPublicRoute) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	if (!hasAccessToken && !isPublicRoute) {
		return NextResponse.redirect(new URL('/sign-in', request.url));
	}

	return NextResponse.next();
}

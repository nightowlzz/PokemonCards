import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ACCESS_TOKEN } from './api/api.constant';

// 회원 페이지
const userPages = ['/setting', '/create-card'];

export function middleware(request: NextRequest) {
	const publicRoutes = ['/sign-in', '/sign-up'];
	const { pathname } = request.nextUrl;
	const hasAccessToken = request.cookies.has(ACCESS_TOKEN);
	const isPublicRoute = publicRoutes.includes(pathname);

	const isUserPages = userPages.some(url => pathname.startsWith(url));

	// 로그인 후 접근제한
	if (hasAccessToken && isPublicRoute) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	// 로그인 전 로그인 유도
	if (!hasAccessToken && isUserPages) {
		return NextResponse.redirect(new URL('/sign-in', request.url));
	}

	return NextResponse.next();
}

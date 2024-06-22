'use server';

import { ACCESS_TOKEN } from '@/api/api.constant';
import { cookies } from 'next/headers';

// 쿠키 저장
export async function setAccessToken(token: string) {
	cookies().set(ACCESS_TOKEN, token);
}

// 쿠키 사용
export async function getAccessToken() {
	const cookieStore = cookies();
	const token = cookieStore.get(ACCESS_TOKEN);
	return token?.value;
}

// 쿠키 삭제
export async function logout() {
	cookies().delete(ACCESS_TOKEN);
}

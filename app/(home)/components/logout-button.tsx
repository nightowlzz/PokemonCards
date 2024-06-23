'use client';
import { Button } from '@/components/ui/button';
import { logout } from '@/utils/cookie';
import { useRouter } from 'next/navigation';

export function LogOutButton() {
	const router = useRouter();
	const handleLogout = async () => {
		try {
			await logout();
			router.push('/');
		} catch (error) {
			console.error('로그아웃 실패:', error);
		}
	};

	return (
		<Button variant={'circleIcon'} className='w-[100px]' onClick={handleLogout}>
			로그아웃
		</Button>
	);
}

import { Button } from '@/components/ui/button';
import { getAccessToken } from '@/utils/cookie';
import Link from 'next/link';
import { LogOutButton } from './logout-button';

const styled = {
	wrap: 'fixed right-3 bottom-3 flex flex-col gap-y-4',
	button: 'w-[100px]',
};

const getCookie = async () => {
	const token = await getAccessToken();
	if (token) return token;
	return null;
};

export async function Aside() {
	const isLoggedIn = await getCookie();
	return (
		<aside className={styled.wrap}>
			{/* 로그인 전 */}
			{!Boolean(isLoggedIn) && (
				<>
					<Button variant={'circleIcon'} asChild className={styled.button}>
						<Link href='/sign-in' prefetch={true}>
							로그인
						</Link>
					</Button>
					<Button variant={'circleIcon'} asChild className={styled.button}>
						<Link href='/sign-up' prefetch={true}>
							회원가입
						</Link>
					</Button>
				</>
			)}
			{/* 로그인 후 */}
			{Boolean(isLoggedIn) && (
				<>
					<Button variant={'circleIcon'} asChild className={styled.button}>
						<Link href='/create-card' prefetch={true}>
							카드만들기
						</Link>
					</Button>
					<Button variant={'circleIcon'} asChild className={styled.button}>
						<Link href='/setting' prefetch={true}>
							회원정보
						</Link>
					</Button>
					<LogOutButton />
				</>
			)}
			<Button asChild variant={'circleIcon'} className={styled.button}>
				<Link href={'/'} replace>
					Top
				</Link>
			</Button>
		</aside>
	);
}

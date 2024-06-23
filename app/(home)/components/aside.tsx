import { Button } from '@/components/ui/button';
import Link from 'next/link';

const styled = {
	wrap: 'fixed right-3 bottom-3 flex flex-col gap-y-4',
	button: 'w-[100px]',
};

export function Aside() {
	return (
		<aside className={styled.wrap}>
			<Button variant={'circleIcon'} asChild className={styled.button}>
				<Link href='/sign-in'>로그인</Link>
			</Button>
			<Button variant={'circleIcon'} asChild className={styled.button}>
				<Link href='/sign-up'>회원가입</Link>
			</Button>
			<Button variant={'circleIcon'} className={styled.button}>
				Top
			</Button>
		</aside>
	);
}

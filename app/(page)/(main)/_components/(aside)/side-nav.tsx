import { Button } from '@/components/ui/button';
import Link from 'next/link';

const styled = {
	wrap: 'fixed right-3 bottom-3 flex flex-col gap-y-4',
	button: 'w-[100px]',
};

export async function SideNav() {
	return (
		<aside className={styled.wrap}>
			<Button variant={'circleIcon'} asChild className={styled.button}>
				<Link href='/create-card' prefetch={true}>
					카드만들기
				</Link>
			</Button>
			<Button asChild variant={'circleIcon'} className={styled.button}>
				<Link href={'/'} replace>
					Top
				</Link>
			</Button>
		</aside>
	);
}

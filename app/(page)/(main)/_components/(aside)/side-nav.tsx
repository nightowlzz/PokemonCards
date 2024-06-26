import { Button } from '@/components/ui/button';
import Link from 'next/link';

const styled = {
	wrap: 'fixed right-3 bottom-6 flex flex-col gap-y-4',
	button: 'bg-orange-500 w-[100px] hover:bg-orange-600',
};

export async function SideNav() {
	return (
		<aside className={styled.wrap}>
			<Button asChild className={styled.button}>
				<Link href='/create-card' prefetch={true}>
					카드만들기
				</Link>
			</Button>
			<Button asChild className={styled.button}>
				<Link href='/' replace>
					Top
				</Link>
			</Button>
		</aside>
	);
}

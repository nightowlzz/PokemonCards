'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function TopButton() {
	const pathname = usePathname();
	return (
		<Button asChild className='w-[100px]'>
			<Link href={pathname} replace>
				Top
			</Link>
		</Button>
	);
}

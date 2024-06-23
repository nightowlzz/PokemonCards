import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardList } from './_components/(card)/card-list';
import { Aside } from './_components/(aside)/aside';

export default async function Main() {
	return (
		<main className='max-w-[1240px] m-auto px-5'>
			<CardList />
			<Aside />
		</main>
	);
}

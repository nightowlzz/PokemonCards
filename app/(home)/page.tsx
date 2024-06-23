import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Aside } from './components/aside';
import { CardList } from './components/card-list';

export default async function Main() {
	return (
		<main className='max-w-[1240px] m-auto px-5'>
			<CardList />
			<Aside />
		</main>
	);
}

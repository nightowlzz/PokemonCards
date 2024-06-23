import Link from 'next/link';
import { CardList } from './components/card-list';
import { Button } from '@/components/ui/button';

export default async function Main() {
	return (
		<main className='max-w-[1240px] m-auto px-5'>
			<CardList />
		</main>
	);
}

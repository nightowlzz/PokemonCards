import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardList } from './_components/(card)/card-list';
import { SideNav } from './_components/(aside)/side-nav';

export default async function Main() {
	return (
		<div>
			<CardList />
			<SideNav />
		</div>
	);
}

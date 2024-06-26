'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent } from 'react';

export function Search({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }) {
	const handleForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const getSearchValue = formData.get('search');
		setSearch(getSearchValue as string);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='fixed bottom-0 inset my-[100px] max-w-[400px] w-full px-8 py-4 bg-black/80 rounded-[50em] z-20'>
			<form onSubmit={handleForm}>
				<Input type='search' name={'search'} placeholder='영어로 적어주세요.(pikachu)' className='h-[40px] pr-[65px]' />
				<Button type='submit' className='absolute h-[40px] w-[60px] top-4 right-8 bg-orange-400 hover:bg-orange-500'>
					확인
				</Button>
			</form>
		</div>
	);
}

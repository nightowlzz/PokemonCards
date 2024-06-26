'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, MouseEvent, MouseEventHandler, useState } from 'react';

export function Search({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }) {
	const [isDimmed, setIsDimmed] = useState(false);

	const handleForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const getSearchValue = formData.get('search');
		setSearch(getSearchValue as string);
		setIsDimmed(false);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	// animate-move-top
	return (
		<>
			{isDimmed && <div className='fixed left-0 top-0 right-0 bottom-0 bg-black/50 z-10' onClick={() => setIsDimmed(false)}></div>}
			<div
				className={`fixed bottom-0 my-10 max-w-[400px] w-full px-8 py-4 bg-white/30 rounded-[50em] z-20 ${
					isDimmed ? 'transition-all duration-500 bottom-[50%] scale-125' : ''
				}`}
			>
				<form onSubmit={handleForm}>
					<Input
						type='search'
						name={'search'}
						placeholder='영어로 적어주세요.(pikachu)'
						className='h-[40px] pr-[65px]'
						onClick={() => setIsDimmed(true)}
						autoComplete='off'
					/>
					<Button type='submit' className='absolute h-[40px] w-[60px] top-4 right-8 bg-orange-400 hover:bg-orange-500'>
						확인
					</Button>
				</form>
			</div>
		</>
	);
}

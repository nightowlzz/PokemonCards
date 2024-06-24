'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { createCardInfo } from '../../(main)/_components/(card)/card.constants';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import styled from './create.module.scss';
const cardBgType = Object.keys(createCardInfo);

interface CreateFormProps {
	cardTitle: string;
	cardDesc: string;
	imageUrl: string;
	setCardTitle: React.Dispatch<React.SetStateAction<string>>;
	setCardDesc: React.Dispatch<React.SetStateAction<string>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	setCardBg: (bg: string) => void;
}

export function CreateCardForm({ setImageUrl, setCardBg, setCardTitle, setCardDesc, cardTitle, cardDesc, imageUrl }: CreateFormProps) {
	const { register, handleSubmit } = useForm();

	// 파일url
	const handlerImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const file = e.target.files[0];
		if (file) {
			let image = window.URL.createObjectURL(file);
			setImageUrl(image);
		}
	};

	// 파일 삭제
	const handleImageDelete = () => {
		setImageUrl('');
	};

	return (
		<form className='w-full'>
			<div>
				<label className='block text-base mb-2'>카드 배경 선택</label>
				<div className='grid grid-cols-3 items-center justify-start gap-2'>
					{cardBgType.map((bg, i) => (
						<div key={i} className='flex items-center h-full'>
							<Input
								type='radio'
								id={`bg-${bg}`}
								value={bg}
								className='w-5 h-5'
								defaultChecked={bg === 'yellow'}
								{...register('cardBg', { onChange: e => setCardBg(e.target.value) })}
							/>
							<label htmlFor={`bg-${bg}`} className='text-lg ml-2'>
								{bg}
							</label>
						</div>
					))}
				</div>
			</div>
			<div className='relative rounded-lg mt-6'>
				<label htmlFor='title' className='block text-base mb-2'>
					카드이름
				</label>
				<Input
					id='title'
					type='text'
					placeholder='카드 이름을 지어주세요. 최대(12자)'
					className='text-black pr-[90px]'
					value={cardTitle}
					{...register('title', {
						required: true,
						maxLength: 12,
						onChange: e => setCardTitle(e.target.value.slice(0, 12)),
					})}
				/>
				<span className='absolute right-0 bottom-0 text-black bg-orange-200 h-10 px-5 flex items-center justify-center rounded-lg'>
					{cardTitle.length}/12
				</span>
			</div>

			<div className='relative rounded-lg mt-6'>
				<label htmlFor='desc' className='block text-base mb-2'>
					카드정보
				</label>
				<Textarea
					id='desc'
					placeholder='내용을 적어주세요. 최대(50자)'
					className='text-black pr-[90px] h-[100px]'
					value={cardDesc}
					{...register('desc', { required: true, maxLength: 50, onChange: e => setCardDesc(e.target.value.slice(0, 50)) })}
				/>
				<span className='absolute right-0 bottom-0 text-black bg-orange-200 h-[100px] px-5 flex items-center justify-center rounded-lg'>
					{cardDesc.length}/50
				</span>
			</div>

			<div className='relative flex items-center justify-center rounded-lg mt-6 p-5 bg-white'>
				<div className='relative z-10 flex items-center justify-center w-[140px] h-[140px]'>
					<Input
						id='file'
						type='file'
						accept='image/*'
						className={cn(styled.fileInput, 'absolute inset-0 w-full h-full cursor-pointer z-0')}
						{...register('file', { onChange: handlerImageUrl })}
					/>
					<label
						htmlFor='file'
						className='absolute inset-0 w-full h-full flex items-center justify-center border-2 bg-contain bg-center bg-no-repeat z-3 cursor-pointer'
						style={{ backgroundImage: `url(${imageUrl})` }}
					></label>
				</div>
				<button type='button' className='absolute right-1 top-0 z-10 p-2' onClick={handleImageDelete}>
					<IoCloseCircleOutline color={'black'} className='w-8 h-8 p-0 text-lg' />
				</button>
			</div>
		</form>
	);
}

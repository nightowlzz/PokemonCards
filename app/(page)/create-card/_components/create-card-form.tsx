'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { createCardInfo } from '../../(main)/_components/(card)/card.constants';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
	const { register, handleSubmit, watch } = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
		setCardBg(data.cardBg);
	};

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
		<form onSubmit={handleSubmit(onSubmit)} className='w-full p-8'>
			<div className='space-y-2'>
				<label className='text-base'>카드 배경 선택</label>
				{cardBgType.map((bg, i) => (
					<div key={i} className='flex items-center'>
						<Input type='radio' id={`bg-${bg}`} value={bg} {...register('cardBg', { onChange: e => setCardBg(e.target.value) })} />
						<label htmlFor={`bg-${bg}`} className='ml-2'>
							{bg}
						</label>
					</div>
				))}
			</div>
			<div className='relative overflow-hidden rounded-lg'>
				<label htmlFor='title' className='text-base'>
					카드이름
				</label>
				<Input
					id='title'
					type='text'
					placeholder='카드 이름을 지어주세요. 최대(12자)'
					className='text-black pr-[100px]'
					value={cardTitle}
					{...register('title', {
						required: true,
						maxLength: 12,
						onChange: e => setCardTitle(e.target.value.slice(0, 12)),
					})}
				/>
				<span className='absolute right-0 top-0 text-black bg-orange-200 h-full px-5 flex items-center justify-center'>{cardTitle.length}/12</span>
			</div>

			<div className='relative overflow-hidden rounded-lg'>
				<label htmlFor='desc' className='text-base'>
					카드정보
				</label>
				<Textarea
					id='desc'
					placeholder='내용을 적어주세요. 최대(50자)'
					className='text-black h-[123px]'
					value={cardDesc}
					{...register('desc', { required: true, maxLength: 50, onChange: e => setCardDesc(e.target.value.slice(0, 50)) })}
				/>
				<span className='absolute right-0 top-0 text-black bg-orange-200 h-full px-5 flex items-center justify-center'>{cardDesc.length}/50</span>
			</div>

			<div className='relative overflow-hidden rounded-lg'>
				<label
					htmlFor='file'
					className='absolute top-0 right-0 w-[250px] h-[250px] bg-white z-10 flex items-center justify-center bg-contain bg-white bg-center bg-no-repeat'
					style={{ backgroundImage: `url(${imageUrl})` }}
				></label>
				<Input
					id='file'
					type='file'
					accept='image/*'
					className='absolute right-0 top-0 w-[240px] h-[240px]-z-0'
					{...register('file', { onChange: handlerImageUrl })}
				/>
				<button type='button' className='absolute right-1 top-0 z-10 p-2' onClick={handleImageDelete}>
					<IoCloseCircleOutline color={'black'} className='w-8 h-8 p-0 text-lg' />
				</button>
			</div>
		</form>
	);
}

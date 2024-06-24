'use client';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { CreateCardForm } from './_components/create-card-form';
import { createCardInfo } from '../(main)/_components/(card)/card.constants';
import { cardBgcolorType } from '../(main)/_components/(card)/card';
import { CardBox } from '../(main)/_components/(card)/card-box';

const cardBgType = Object.keys(createCardInfo);

export default function CreateCard() {
	const [cardTitle, setCardTitle] = useState<string>('');
	const [cardDesc, setCardDesc] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string>('');
	const [cardBg, setCardBg] = useState<string | number>('yellow');
	// const [imageFile, setImageFile] = useState<File | null>(null);

	const cardRef = useRef(null);

	// 이미지 다운로드
	const handleCapture = () => {
		const cardBoxElement = cardRef.current;
		if (cardBoxElement) {
			html2canvas(cardBoxElement).then(canvas => {
				const link = document.createElement('a');
				link.href = canvas.toDataURL('image/png');
				link.download = 'my-poketmon-card.png';
				link.click();
			});
		}
	};

	return (
		<section className='flex items-center justify-center w-full'>
			<div className='relative bg-white w-full h-[700px] flex items-center justify-center pr-[400px]'>
				<div ref={cardRef}>
					<CardBox type={'create'} cardBgcolor={cardBg} name={'bg'} image={imageUrl} cardTitle={cardTitle} cardDesc={cardDesc} />
				</div>
				<div className='absolute right-0 top-0 w-[400px] h-full bg-black/30'>
					<Button onClick={handleCapture} className='absolute right-4 top-4 font-bold w-[150px] text-black'>
						카드 다운로드
					</Button>
					<CreateCardForm
						setImageUrl={setImageUrl}
						setCardTitle={setCardTitle}
						setCardDesc={setCardDesc}
						setCardBg={setCardBg}
						cardTitle={cardTitle}
						cardDesc={cardDesc}
						imageUrl={imageUrl}
					/>
				</div>
			</div>
		</section>
	);
}

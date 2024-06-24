'use client';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { CardBox } from '../(main)/_components/(card)/card-box';
import { CreateCardForm } from './_components/create-card-form';

export default function CreateCard() {
	const [cardTitle, setCardTitle] = useState<string>('');
	const [cardDesc, setCardDesc] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string>('');
	const [cardBg, setCardBg] = useState<string | number>('yellow');

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
			<div className='relative bg-white w-full h-[700px] flex items-center justify-center pr-[400px] rounded-lg'>
				<div ref={cardRef}>
					<CardBox type={'create'} cardBgcolor={cardBg} name={'bg'} image={imageUrl} cardTitle={cardTitle} cardDesc={cardDesc} />
				</div>
				<div className='absolute right-0 top-0 w-[400px] h-full bg-black/30 p-8'>
					<CreateCardForm
						setImageUrl={setImageUrl}
						setCardTitle={setCardTitle}
						setCardDesc={setCardDesc}
						setCardBg={setCardBg}
						cardTitle={cardTitle}
						cardDesc={cardDesc}
						imageUrl={imageUrl}
					/>
					<Button onClick={handleCapture} className='font-bold w-[150px] bg-orange-200 text-black mt-6 w-full hover:bg-orange-300 '>
						카드 다운로드
					</Button>
				</div>
			</div>
		</section>
	);
}

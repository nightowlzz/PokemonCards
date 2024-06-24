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
	const [cardBg, setCardBg] = useState<cardBgcolorType>('yellow');
	const [imageUrl, setImageUrl] = useState<string>('');
	const [imageFile, setImageFile] = useState<File | null>(null);

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
		<section>
			<div>
				<div className='relative bg-white w-full h-[600px] flex items-center justify-center'>
					<div className='absolute flex flex-col gap-2 left-4 top-4 text-black text-left'>
						{cardBgType.map((bg, i) => (
							<Button key={i} onClick={() => setCardBg(bg)} className={`${createCardInfo[bg].buttonClassName}`}>
								{bg}
							</Button>
						))}
					</div>
					<div ref={cardRef}>
						<CardBox type={'create'} cardBgcolor={cardBg} name={'bg'} image={imageUrl} cardTitle={cardTitle} cardDesc={cardDesc} />
					</div>
					<Button onClick={handleCapture} className='absolute right-4 top-4 font-bold w-[150px] text-black'>
						카드 다운로드
					</Button>
				</div>
			</div>
			<div className='relative pr-[35%] my-10'>
				<CreateCardForm
					setImageUrl={setImageUrl}
					setImageFile={setImageFile}
					setCardTitle={setCardTitle}
					setCardDesc={setCardDesc}
					cardTitle={cardTitle}
					cardDesc={cardDesc}
					imageUrl={imageUrl}
				/>
			</div>
		</section>
	);
}

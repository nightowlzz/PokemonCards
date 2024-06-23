'use client';
import { cardBgcolorType } from '@/app/(home)/_components/(card)/card';
import { CardBox } from '@/app/(home)/_components/(card)/card-box';
import { createCardInfo } from '@/app/(home)/_components/(card)/card.constants';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const bg = '/images/cat1.jpg';
const cardBgType = Object.keys(createCardInfo);

export default function CreateCard() {
	const [cardBg, setCardBg] = useState<cardBgcolorType>('yellow');
	const cardRef = useRef(null);

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
						<CardBox type={'create'} cardBgcolor={cardBg} name={'bg'} image={bg} />
					</div>
				</div>
			</div>
			<div>
				<Button onClick={handleCapture}>Capture CardBox</Button>
			</div>
		</section>
	);
}

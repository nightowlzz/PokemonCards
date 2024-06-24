import Image from 'next/image';
import styled from './card.module.scss';
import { createCardInfo } from './card.constants';
import { cn } from '@/lib/utils';
import '@/public/styles/font.css';

// CardProps 인터페이스 정의
export type cardBgTypeType = keyof typeof createCardInfo;
export type cardType = 'view' | 'create';
interface CardProps {
	handleMouseMoving: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleMouseOut: () => void;
	image: string;
	name: string;
	isMouseOut: boolean;
	rotate: {
		x: number;
		y: number;
	};
	shadow: {
		x: number;
		y: number;
	};
	type?: cardType;
	cardBgType?: cardBgTypeType;
	cardTitle?: string;
	cardDesc?: string;
}

export function Card({
	type = 'view',
	cardBgType = 'blue',
	handleMouseMoving,
	handleMouseOut,
	rotate,
	shadow,
	name,
	image,
	isMouseOut,
	cardTitle,
	cardDesc,
}: CardProps) {
	return (
		<div
			className={styled.card}
			onMouseMove={handleMouseMoving}
			onMouseOut={handleMouseOut}
			style={{
				transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
				transition: isMouseOut ? 'transform 0.6s ease, box-shadow 0.6s ease' : 'none',
				backgroundImage: `url(${type === 'view' ? '/images/poketmon-back-image.jpg' : ''})`,
			}}
		>
			{/* 보는 이미지 */}
			{type === 'view' && (
				<Image
					src={`${image}/low.webp`}
					alt={name}
					className='cardFrontImage'
					fill
					style={{ objectFit: 'cover' }}
					sizes='(min-width: 1024px) 330px, 250px'
				/>
			)}

			{/* 만드는 이미지 */}
			{type === 'create' && (
				<div className={cn(styled.cardBackImgWrap, createCardInfo[cardBgType].backImageClassName)}>
					{/* 타이틀 */}
					<strong className={styled.title}>{cardTitle}</strong>
					<div className={styled.desc}>
						<span className={cn(styled.descTitle, 'block mb-2')}>🍚 Info.</span>
						<p>{cardDesc}</p>
					</div>
					{/* 카드배경 */}
					<Image
						src={`${createCardInfo[cardBgType].frontImageUrl}`}
						alt={name}
						className='cardFrontImage'
						fill
						style={{ objectFit: 'cover' }}
						sizes='(min-width: 1024px) 330px, 250px'
					/>
					{/* 추가 이미지 */}
					<div className={styled.cardBackImageBox}>
						<Image src={`${image}`} alt={name} className={styled.cardBackImage} width={330} height={460} />
					</div>
				</div>
			)}
			<div className={styled.overlay} style={{ left: `${shadow.x}px`, top: `${shadow.y}px` }}></div>
		</div>
	);
}

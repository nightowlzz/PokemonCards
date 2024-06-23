import Image from 'next/image';
import styled from './card.module.scss';
import { createCardInfo } from './card.constants';
import { cn } from '@/lib/utils';
import '@/public/styles/font.css';

const monsterBall = '/images/monster-ball.png';

// CardProps 인터페이스 정의
export type cardBgcolorType = keyof typeof createCardInfo;
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
	cardBgcolor?: cardBgcolorType;
	cardTitle?: string;
	cardDesc?: string;
}

export function Card({
	type = 'view',
	cardBgcolor = 'blue',
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
				background: `url(${type === 'view' ? '/images/poketmon-back-image.jpg' : ''}) no-repeat center`,
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
				<div className={cn(styled.cardBackImgWrap, createCardInfo[cardBgcolor].backImageClassName)}>
					{/* 타이틀 */}
					<strong className={styled.title}>{cardTitle}</strong>
					{/* 정보 */}
					<div className={styled.desc}>
						<span className='flex items-center mb-2'>
							<Image src={monsterBall} alt={'몬스터볼'} width={30} height={30} /> 정보
						</span>
						<p>{cardDesc}</p>
					</div>
					{/* 카드배경 */}
					<Image
						src={`${createCardInfo[cardBgcolor].frontImageUrl}`}
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
			{/* <Image src={card_back_imag} alt='포켓몬카드뒷면' width={CARD_WIDTH_PC} height={CARD_HEIGHT_PC} /> */}
			<div className={styled.overlay} style={{ left: `${shadow.x}px`, top: `${shadow.y}px` }}></div>
		</div>
	);
}

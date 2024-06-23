import Image from 'next/image';
import styled from './card.module.css';
const card_back_imag = '/images/poketmon-back-image.jpg';

const CARD_WIDTH_PC = 330;
const CARD_HEIGHT_PC = 460;

// CardProps 인터페이스 정의
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
}

export function Card({ handleMouseMoving, handleMouseOut, rotate, shadow, name, image, isMouseOut }: CardProps) {
	return (
		<div
			className={styled.card}
			onMouseMove={handleMouseMoving}
			onMouseOut={handleMouseOut}
			style={{
				transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
				transition: isMouseOut ? 'transform 0.6s ease, box-shadow 0.6s ease' : 'none',
			}}
		>
			<Image src={`${image}/high.webp`} alt={name} fill style={{ objectFit: 'cover' }} />
			{/* <Image src={card_back_imag} alt='포켓몬카드뒷면' width={CARD_WIDTH_PC} height={CARD_HEIGHT_PC} /> */}
			<div className={styled.overlay} style={{ left: `${shadow.x}px`, top: `${shadow.y}px` }}></div>
		</div>
	);
}

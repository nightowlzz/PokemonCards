'use client';

import React, { useState } from 'react';
import { Card, CardBgType } from './card';
import { CardType } from './card.type';

interface CardBodProp {
	name: string;
	image: string;
	type?: CardType;
	cardBgType?: CardBgType;
	cardTitle?: string;
	cardDesc?: string;
}

export function CardBox({ type, cardBgType, name, image, cardTitle, cardDesc }: CardBodProp) {
	const [rotate, setRotate] = useState({ x: 0, y: 0 }); // 카드 rotate
	const [shadow, setShadow] = useState({ x: 0, y: 0 }); // 카드 광 위치
	const [isMouseOut, setIsMouseOut] = useState(false); // transition 삭제, 추가

	const handleMouseMoving = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setIsMouseOut(false);
		const card = e.currentTarget;

		const rect = card.getBoundingClientRect(); // 카드 요소의 위치와 크기
		const cardWidth = rect.width;
		const cardHeight = rect.height;

		const offsetX = e.nativeEvent.offsetX; // 마우스 x,y축
		const offsetY = e.nativeEvent.offsetY;

		const centerX = cardWidth / 2; // 카드의 중심 좌표
		const centerY = cardHeight / 2;

		const mouseX = e.clientX - rect.left; // 카드 좌상단을 기준으로 마우스 위치
		const mouseY = e.clientY - rect.top;

		const rotateY = -((mouseX - centerX) / centerX) * 20; //회전 각도 계산
		const rotateX = ((mouseY - centerY) / centerY) * 20;

		setRotate({ x: rotateX, y: rotateY });
		setShadow({ x: offsetX, y: offsetY });
	};

	const handleMouseOut = () => {
		setIsMouseOut(true);
		setRotate({ x: 0, y: 0 });
		setShadow({ x: 0, y: 0 });
	};

	return (
		<Card
			type={type}
			cardBgType={cardBgType}
			handleMouseMoving={handleMouseMoving}
			handleMouseOut={handleMouseOut}
			isMouseOut={isMouseOut}
			rotate={rotate}
			shadow={shadow}
			image={image}
			name={name}
			cardTitle={cardTitle}
			cardDesc={cardDesc}
		/>
	);
}

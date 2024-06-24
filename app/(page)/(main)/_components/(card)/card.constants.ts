import styled from './card.module.scss';

interface CardInfo {
	[key: string]: {
		buttonClassName: string;
		frontImageUrl: string;
		backImageClassName: string;
	};
}

export const createCardInfo: CardInfo = {
	yellow: {
		buttonClassName: 'bg-[#feeb13] text-black hover:bg-[#ffb947]',
		frontImageUrl: '/images/card-bg-yellow.png',
		backImageClassName: styled.cardBackImageYellowWrap,
	},
	blue: {
		buttonClassName: 'bg-[#3e82ff] hover:bg-[#2a6be3]',
		frontImageUrl: '/images/card-bg-blue.png',
		backImageClassName: styled.cardBackImageBlueWrap,
	},
	white: {
		buttonClassName: 'bg-[#f3efec] text-black hover:bg-[#dddddd]',
		frontImageUrl: '/images/card-bg-white.png',
		backImageClassName: styled.cardBackImageWhiteWrap,
	},
	silver: {
		buttonClassName: 'bg-[#cccccc] text-black hover:bg-[#aaaaaa]',
		frontImageUrl: '/images/card-bg-silver.png',
		backImageClassName: styled.cardBackImageSilverWrap,
	},
	full: {
		buttonClassName: 'bg-[#333333] hover:bg-[#111111]',
		frontImageUrl: '/images/card-bg-full.png',
		backImageClassName: styled.cardBackImageFullWrap,
	},
};

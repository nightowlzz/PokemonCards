import styled from './card.module.scss';

interface CardInfo {
	[key: string]: {
		buttonClassName: string;
		frontImageUrl: string;
		backImageClassName: string;
		maxTitleLength: number;
		maxTextLength: number;
		titlePlaceholder: string;
		textPlaceholder: string;
	};
}

const MIN_LENGTH = 20;
const MIDDLE_LENGTH = 30;
const LONG_LENGTH = 50;

export const createCardInfo: CardInfo = {
	yellow: {
		backImageClassName: styled.cardBackImageYellowWrap,
		buttonClassName: 'bg-[#feeb13] text-black hover:bg-[#ffb947]',
		frontImageUrl: '/images/card-bg-yellow.png',
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: LONG_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${LONG_LENGTH}자)`,
	},
	blue: {
		backImageClassName: styled.cardBackImageBlueWrap,
		buttonClassName: 'bg-[#3e82ff] hover:bg-[#2a6be3]',
		frontImageUrl: '/images/card-bg-blue.png',
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: LONG_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${LONG_LENGTH}자)`,
	},
	white: {
		backImageClassName: styled.cardBackImageWhiteWrap,
		buttonClassName: 'bg-[#f3efec] text-black hover:bg-[#dddddd]',
		frontImageUrl: '/images/card-bg-white.png',
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: LONG_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${LONG_LENGTH}자)`,
	},
	silver: {
		backImageClassName: styled.cardBackImageSilverWrap,
		buttonClassName: 'bg-[#cccccc] text-black hover:bg-[#aaaaaa]',
		frontImageUrl: '/images/card-bg-silver.png',
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: MIDDLE_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${MIDDLE_LENGTH}자)`,
	},
	full: {
		backImageClassName: styled.cardBackImageFullWrap,
		buttonClassName: 'bg-[#333333] hover:bg-[#111111]',
		frontImageUrl: '/images/card-bg-full.png',
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: LONG_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${LONG_LENGTH}자)`,
	},
};

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
		buttonClassName: 'bg-[#feeb13] text-black hover:bg-[#ffb947]',
		frontImageUrl: '/images/card-bg-yellow.png',
		backImageClassName: styled.cardBackImageYellowWrap,
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: LONG_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${LONG_LENGTH}자)`,
	},
	blue: {
		buttonClassName: 'bg-[#3e82ff] hover:bg-[#2a6be3]',
		frontImageUrl: '/images/card-bg-blue.png',
		backImageClassName: styled.cardBackImageBlueWrap,
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: LONG_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${LONG_LENGTH}자)`,
	},
	white: {
		buttonClassName: 'bg-[#f3efec] text-black hover:bg-[#dddddd]',
		frontImageUrl: '/images/card-bg-white.png',
		backImageClassName: styled.cardBackImageWhiteWrap,
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: LONG_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${LONG_LENGTH}자)`,
	},
	silver: {
		buttonClassName: 'bg-[#cccccc] text-black hover:bg-[#aaaaaa]',
		frontImageUrl: '/images/card-bg-silver.png',
		backImageClassName: styled.cardBackImageSilverWrap,
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: MIDDLE_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${MIDDLE_LENGTH}자)`,
	},
	full: {
		buttonClassName: 'bg-[#333333] hover:bg-[#111111]',
		frontImageUrl: '/images/card-bg-full.png',
		backImageClassName: styled.cardBackImageFullWrap,
		maxTitleLength: MIN_LENGTH,
		titlePlaceholder: `카드 제목을 지어주세요. 최대(${MIN_LENGTH}자)`,
		maxTextLength: LONG_LENGTH,
		textPlaceholder: `내용을 적어주세요. 최대(${LONG_LENGTH}자)`,
	},
};

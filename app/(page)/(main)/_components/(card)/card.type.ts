export type CardType = 'view' | 'create';

// api 받아온 카드 타입
export interface PoketmonCardApi {
	id: string;
	localId: string;
	name: string;
	image?: string;
}

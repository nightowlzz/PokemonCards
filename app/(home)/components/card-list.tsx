import { poketmonApi } from '@/api/poketmon.api';
import TCGdex from '@tcgdex/sdk';
import { CardBox } from './card-box';

export interface CardType {
	id: string;
	localId: string;
	name: string;
	image: string;
}

const getServerSideProps = async () => {
	const { data } = await poketmonApi.get('/cards?pagination:page=1&pagination:itemsPerPage=20');
	return data;
};

export async function CardList() {
	const data: CardType[] = await getServerSideProps();
	return (
		<div>
			<ul className='grid grid-cols-3 gap-20'>
				{data?.map(card => {
					if (card.image) {
						return (
							<li key={card.id}>
								<CardBox image={card.image} name={card.name} />
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
}

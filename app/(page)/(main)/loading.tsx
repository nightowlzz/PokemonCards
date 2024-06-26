import { CardBox } from './_components/(card)/card-box';

const emptyCard = Array.from({ length: 3 });

export default function CardListLoading() {
	return (
		<div className='grid grid-cols-3 gap-20'>
			{emptyCard.map((_, i) => (
				<CardBox key={i} name={''} image={''} />
			))}
		</div>
	);
}

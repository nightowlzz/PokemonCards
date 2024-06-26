import { getAllCardList, getSearchCard } from '@/api/poketmon.api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CardListLoading from '../../loading';
import { CardBox } from './card-box';
import { PoketmonCardApi } from './card.type';

const PAGE_LIMIT = 40; // 페이지당 항목 수 설정
export function CardList({ search }: { search: string }) {
	const [ref, inView] = useInView({
		threshold: 0.1,
	});

	const {
		data: cardList,
		isPending,
		isError,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: !search ? ['cards'] : ['searchCard', search],
		queryFn: ({ pageParam = 1 }) => {
			if (!search) return getAllCardList(pageParam, PAGE_LIMIT);
			if (search) return getSearchCard(search, pageParam, PAGE_LIMIT);
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, _, lastPageParam) => {
			return lastPage.length === PAGE_LIMIT ? lastPageParam + 1 : undefined;
		},
	});

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

	if (isPending) return <CardListLoading />;
	if (isError) return 'ERROR';

	return (
		<div>
			<ul className='grid grid-cols-3 gap-20'>
				{cardList?.pages.flatMap(card =>
					card.map(
						(card: PoketmonCardApi) =>
							card.image && (
								<li key={card.id} ref={ref}>
									<CardBox image={card.image} name={card.name} />
								</li>
							),
					),
				)}
			</ul>
		</div>
	);
}

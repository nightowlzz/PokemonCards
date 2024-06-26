'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { CardList } from './(card)/card-list';
import { Search } from './(seach)/search';

const queryClient = new QueryClient();
export function SearchCardWrap() {
	const [search, setSearch] = useState<string>('');

	return (
		<QueryClientProvider client={queryClient}>
			<Search setSearch={setSearch} />
			<CardList search={search} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

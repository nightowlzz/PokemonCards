import axios from 'axios';

const BASE_URL = 'https://api.tcgdex.net/v2/en/';

export const poketmonApi = axios.create({
	baseURL: BASE_URL,
});

export const getAllCardList = async (page: number, limit: number) => {
	const { data } = await poketmonApi.get(`/cards?pagination:page=${page}&pagination:itemsPerPage=${limit}`);
	return data;
};

export const getSearchCard = async (name: string, page: number, limit: number) => {
	const { data } = await poketmonApi.get(
		`/cards?name=${name}&sort:field=name&sort:order=DESC&pagination:page=${page}&pagination:itemsPerPage=${limit}`,
	);
	return data;
};

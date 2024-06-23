import axios from 'axios';

export const poketmonApi = axios.create({
	baseURL: 'https://api.tcgdex.net/v2/en/',
});

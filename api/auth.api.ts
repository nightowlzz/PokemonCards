import { getAccessToken } from '@/utils/cookie';
import axios from 'axios';

export const authApi = axios.create({
	baseURL: 'https://sp-taskify-api.vercel.app/5-1',
});

authApi.interceptors.request.use(
	async function (config) {
		const token = await getAccessToken();
		if (token) config.headers.Authorization = `Bearer ${token}`;

		return config;
	},
	function (error) {
		// 요청 오류가 있는 작업 수행
		return Promise.reject(error);
	},
);

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '/**',
			},
		],
		formats: ['image/avif', 'image/webp'], // 지원할 이미지 형식 추가
	},
};

export default nextConfig;

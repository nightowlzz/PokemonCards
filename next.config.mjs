/** @type {import('next').NextConfig} */
import path from 'path';

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
	sassOptions: {
		includePaths: [path.join(process.cwd(), 'styles')],
	},
};

export default nextConfig;

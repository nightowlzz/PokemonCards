import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'PoketMon Cards',
	description: '포켓몬 카드를 구경하고 나의 이미지도 올려보자',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ko'>
			<body className={`${roboto.className} bg-[#1d4d9f] text-white`}>{children}</body>
		</html>
	);
}

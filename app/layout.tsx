import type { Metadata } from 'next';
import './globals.css';

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
			<body>{children}</body>
		</html>
	);
}

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

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
			<body className={`${roboto.className} bg-[#393c41] text-white`}>
				<main className='flex flex-col items-center justify-center max-w-[1180px] m-auto p-12 min-h-screen'>{children}</main>
			</body>
		</html>
	);
}

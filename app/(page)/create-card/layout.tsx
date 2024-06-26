import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: '카드만들기',
};

export default function CreateCardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}

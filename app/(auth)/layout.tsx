import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return <section className='flex items-center justify-center flex-col h-screen max-w-[500px] p-12 m-auto'>{children}</section>;
}

import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return <section className='min-h-screen max-w-[900px] m-auto'>{children}</section>;
}

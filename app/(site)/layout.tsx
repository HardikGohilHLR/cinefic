// Layout
import Header from '@/components/layout/header';
import AuthProvider from '@/providers/AuthProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cinefic',
	description: 'Movies and TV Shows',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<AuthProvider>

					{/* Header */}
					<Header />
		
					{children}
				</AuthProvider>
			</body>
		</html>
	)
}

// app/layout.tsx
import { AuthProvider } from '@/app/context/auth';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from './components/ui/headerfooter/header';
import Footer from './components/ui/headerfooter/footer';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Make sure AuthProvider wraps ALL content */}
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
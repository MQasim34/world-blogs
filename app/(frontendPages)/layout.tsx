// app/layout.tsx
import { AuthProvider } from '@/app/context/auth';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/headerfooter/header'
import Footer from '../../components/headerfooter/footer';
import { ThemeProvider } from "@/components/theme-provider"
 
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
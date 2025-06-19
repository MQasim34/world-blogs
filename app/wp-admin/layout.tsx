'use client';
import { useAuth } from '@/app/context/auth';
import { useEffect, useState } from 'react';
import { AuthProvider } from "../context/auth";
import { lato } from "./fonts/fonts";
import '@/app/globals.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DashboardTopBar from './ui/DashboardTopBar';
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from '@/app/wp-admin/ui/app-sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased dark:bg-black/50 bg-gray-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <AuthWrapper>
              {children}
            </AuthWrapper>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isRedirecting) {
      setIsRedirecting(true);
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router, isRedirecting]);

  if (isLoading || isRedirecting) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Redirect already handled by useEffect
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-grow">
          <DashboardTopBar />
          <main className="p-5 flex-grow">
            {children}
          </main>
          <footer className="flex items-center justify-between px-5 pb-2.5">
            <div className={`${lato.className} antialiased text-gray-500`}>
              Thanks for Choosing Us
            </div>
            <div className={`${lato.className} antialiased font-normal text-gray-500`}>
              Designed & Developed by{' '}
              <Link 
                className='underline font-medium hover:text-blue-900' 
                href='https://mqasim34.github.io/BuzzStrivePro/' 
                target='_blank'>
                BSP Team
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
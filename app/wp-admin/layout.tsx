'use client';
import { useAuth } from '@/app/context/auth';
import { useEffect } from 'react';


import { AuthProvider } from "../context/auth";
import { lato, poppins } from "./fonts/fonts";
import Sidebar from "./ui/sidebar";
import '@/app/globals.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato} antialiased bg-gray-50`}>
        <AuthProvider>
          <AuthWrapper>{children}</AuthWrapper>
        </AuthProvider>
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
      // setIsRedirecting(true);
      router.push('/wp-admin');
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
    router.push('/login')
    // return null; // Briefly shows nothing while redirecting
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <div className="bg-white py-2 px-5 shadow">
          <div className="flex justify-between items-center">
            <div>website URL</div>
            <div>welcome back, Qasim</div>
          </div>
        </div>
        <div className="p-5">{children}</div>
        <div className="flex items-center justify-between px-5 pb-2.5">
          <div className={`${lato} antialiased text-gray-500`}>Thanks for Choosing Us</div>
          <div className={`${lato} antialiased font-normal text-gray-500`}>Designed & Developed by <Link className='underline text-black font-medium hover:text-blue-900' href='https://mqasim34.github.io/BuzzStrivePro/' target='_blank'>BSP Team</Link></div>
        </div>
      </div>
    </div>
  );
}
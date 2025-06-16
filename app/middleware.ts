import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // 1. Debug logging (remove after verification)
//   console.log('\nMiddleware triggered for:', request.nextUrl.pathname);
//   console.log('COMING_SOON:', process.env.COMING_SOON);
  
//   // 2. Always allow in development
//   if (process.env.NODE_ENV === 'development') {
//     console.log('Allowing request (development mode)');
//     return NextResponse.next();
//   }

//   // 3. Define allowed paths (update these to match your exact routes)
//   const allowedPaths = [
//     '/coming-soon',
//     '/login',
//     '/wp-admin',
//     '/admin',
//     '/api',
//     '/_next',
//     '/favicon.ico',
//     '/images',
//     '/assets'
//   ];

//   // 4. Check if current path is allowed
//   const isAllowed = allowedPaths.some(path => 
//     request.nextUrl.pathname.startsWith(path)
//   );

//   console.log('Is allowed path:', isAllowed);

//   // 5. Redirect if coming soon is enabled and path not allowed
//   if (process.env.COMING_SOON === 'true' && !isAllowed) {
//     console.log('Redirecting to /coming-soon');
//     return NextResponse.redirect(new URL('/coming-soon', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico|login|wp-admin|admin).*)',
//   ],
// };

// Simplified middleware.ts for testing
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/coming-soon', request.url));
}
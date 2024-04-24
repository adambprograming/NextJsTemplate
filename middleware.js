import { NextResponse } from 'next/server'
let locales = ['en', 'cz'/*, 'pl', 'sk', 'de', 'hu'*/]

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const defaultLocale = 'cz'
 
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${defaultLocale}/${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)'
    // '/'
    // Optional: only run on root (/) URL
    // '/'
  ],
}
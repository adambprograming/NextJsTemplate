import { NextResponse } from "next/server";
let locales = ["en", "cs"];

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Get user's preferred locale from the Accept-Language header
  const userLocale = request.headers.get("accept-language");
  const preferredLocale = userLocale?.split(",")[0].toLowerCase(); // Get the first language
  // Choose a locale based on user preference and supported locales
  const chosenLocale = locales.includes(preferredLocale)
    ? preferredLocale
    : "cs"; // Default to 'cs' if not found > If primary lang is english, change this
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${chosenLocale}/${pathname}`, request.url)
    );
  }
  return NextResponse.next(); // Pass through the request if a locale is already present
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // '/'
    // Optional: only run on root (/) URL
    // '/'
  ],
};

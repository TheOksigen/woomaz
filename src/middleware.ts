import {type NextRequest, NextResponse} from "next/server"
import {match} from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const locales = ["az", "ru"]
export const defaultLocale = "az"

function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const languages = new Negotiator({headers: negotiatorHeaders}).languages()

    try {
        return match(languages, locales, defaultLocale)
    } catch (error) {
        return defaultLocale
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url))
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/` and all static files (e.g. images)
    matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
}

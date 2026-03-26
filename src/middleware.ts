import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './config/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // التحقق مما إذا كان الرابط يحتوي على اللغة (en أو ar)
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // إذا لم تكن اللغة موجودة في الرابط، قم بالتحويل للغة الافتراضية
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}

export const config = {
  // استثناء ملفات الصور والـ API من نظام اللغات
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}


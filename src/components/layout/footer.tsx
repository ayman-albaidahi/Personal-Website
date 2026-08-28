'use client'

import Link from 'next/link'
import { Code2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { navigationConfig } from '@/config/navigation'
import { i18n } from '@/config/i18n'

export function Footer({ locale }: { locale: string }) {
  const currentLocale = locale || i18n.defaultLocale

  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/70">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {siteConfig.author.name}.
          {currentLocale === 'ar' ? ' جميع الحقوق محفوظة.' : ' All rights reserved.'}
        </p>

        <nav className="flex flex-wrap justify-center gap-5">
          {navigationConfig.footer.map((item) => {
            const href = `/${currentLocale}${item.href}`
            return (
              <Link key={item.href} href={href} className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300">
                {currentLocale === 'ar' ? item.name.ar : item.name.en}
              </Link>
            )
          })}
        </nav>

        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300">
          <Code2 className="h-4 w-4" /> GitHub
        </Link>
      </div>
    </footer>
  )
}


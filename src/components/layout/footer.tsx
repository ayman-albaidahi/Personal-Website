import Link from 'next/link'
import { Code2, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { navigationConfig } from '@/config/navigation'
import { i18n } from '@/config/i18n'

export function Footer({ locale }: { locale: string }) {
  const currentLocale = locale || i18n.defaultLocale
  const isArabic = currentLocale === 'ar'

  return (
    <footer className="border-t border-white/10 bg-[#07111f] text-slate-400">
      <div className="container mx-auto flex flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div><Link href={`/${currentLocale}`} className="text-sm font-semibold tracking-wide text-white">AYMAN<span className="text-orange-300">.</span></Link><p className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} {siteConfig.author.name}</p></div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3">{navigationConfig.footer.map((item) => <Link key={item.href} href={`/${currentLocale}${item.href}`} className="text-xs font-semibold transition hover:text-orange-300">{isArabic ? item.name.ar : item.name.en}</Link>)}</nav>
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition hover:text-cyan-300"><Code2 className="h-4 w-4" />GitHub<ArrowUpRight className="h-3.5 w-3.5" /></Link>
      </div>
    </footer>
  )
}

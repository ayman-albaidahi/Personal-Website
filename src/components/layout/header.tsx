'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationConfig } from '@/config/navigation'
import { i18n } from '@/config/i18n'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || i18n.defaultLocale
  const isArabic = currentLocale === 'ar'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const localePath = (locale: string) => {
    const withoutLocale = pathname.replace(/^\/(ar|en)/, '') || '/'
    return `/${locale}${withoutLocale === '/' ? '' : withoutLocale}`
  }

  return (
    <header className={cn('sticky top-0 z-50 border-b border-white/10 text-white transition-all duration-300', isScrolled ? 'bg-[#07111f]/95 shadow-lg shadow-black/10 backdrop-blur-xl' : 'bg-[#07111f]')}>
      <div className="container mx-auto flex h-[4.5rem] items-center justify-between px-5 sm:px-8">
        <Link href={`/${currentLocale}`} className="group inline-flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-400 text-sm font-bold text-[#07111f] transition group-hover:rotate-3">أ</span>
          <span className="hidden text-sm font-semibold tracking-wide sm:inline">AYMAN<span className="text-orange-300">.</span></span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigationConfig.main.map((item) => {
            const href = `/${currentLocale}${item.href}`
            const isActive = item.href === '/' ? pathname === `/${currentLocale}` : pathname === href
            return <Link key={item.href} href={href} className={cn('text-xs font-semibold transition-colors', isActive ? 'text-orange-300' : 'text-slate-400 hover:text-white')}>{isArabic ? item.name.ar : item.name.en}</Link>
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={localePath(isArabic ? 'en' : 'ar')} className="rounded-full border border-white/15 px-3 py-2 text-[11px] font-semibold text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200">{isArabic ? 'EN' : 'عربي'}</Link>
          <Link href={`/${currentLocale}/contact`} className="rounded-full bg-orange-400 px-4 py-2 text-xs font-bold text-[#07111f] transition hover:bg-orange-300">{isArabic ? 'تواصل معي' : 'Contact'}</Link>
        </div>

        <button type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} className="rounded-lg border border-white/15 p-2 text-slate-200 md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>

      {isOpen && <div className="border-t border-white/10 bg-[#0b192a] md:hidden"><nav className="container mx-auto flex flex-col gap-1 px-5 py-5 sm:px-8">{navigationConfig.main.map((item) => <Link key={item.href} href={`/${currentLocale}${item.href}`} className="border-b border-white/10 py-4 text-sm font-semibold text-slate-300 transition hover:text-orange-300" onClick={() => setIsOpen(false)}>{isArabic ? item.name.ar : item.name.en}</Link>)}<div className="flex gap-3 pt-4"><Link href={localePath(isArabic ? 'en' : 'ar')} className="flex-1 rounded-full border border-white/15 px-4 py-3 text-center text-xs font-semibold text-slate-300">{isArabic ? 'English' : 'العربية'}</Link><Link href={`/${currentLocale}/contact`} className="flex-1 rounded-full bg-orange-400 px-4 py-3 text-center text-xs font-bold text-[#07111f]" onClick={() => setIsOpen(false)}>{isArabic ? 'تواصل معي' : 'Contact'}</Link></div></nav></div>}
    </header>
  )
}

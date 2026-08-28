'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navigationConfig } from '@/config/navigation' // استخدام ملف اللغات
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react' // أضفنا أيقونة اللغة
import { i18n } from '@/config/i18n'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // معرفة اللغة الحالية
  const currentLocale = pathname.split('/')[1] || i18n.defaultLocale

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm" 
        : "bg-transparent border-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href={`/${currentLocale}`} className="font-bold text-xl tracking-tighter">
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navigationConfig.main.map((item) => {
            const href = `/${currentLocale}${item.href === '/' ? '' : item.href}`
            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === href ? 'text-primary font-bold' : 'text-muted-foreground'
                )}
              >
                {currentLocale === 'ar' ? item.name.ar : item.name.en}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* زر تبديل اللغة */}
          <Link href={currentLocale === 'ar' ? pathname.replace('/ar', '/en') : pathname.replace('/en', '/ar')}>
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe size={16} />
              {currentLocale === 'ar' ? 'English' : 'العربية'}
            </Button>
          </Link>
          <Link href={`/${currentLocale}/contact`}>
            <Button size="sm">
              {currentLocale === 'ar' ? 'تواصل معي' : 'Contact'}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4 px-6">
            {navigationConfig.main.map((item) => (
              <Link
                key={item.href}
                href={`/${currentLocale}${item.href === '/' ? '' : item.href}`}
                className="text-lg font-medium border-b pb-2"
                onClick={() => setIsOpen(false)}
              >
                {currentLocale === 'ar' ? item.name.ar : item.name.en}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
               <Link href={`/${currentLocale}/contact`} onClick={() => setIsOpen(false)}>
                 <Button className="w-full">
                    {currentLocale === 'ar' ? 'تواصل معي' : 'Contact Me'}
                 </Button>
               </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
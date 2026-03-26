import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// دالة دمج كلاسات Tailwind ومنع التعارض
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// دالة تنسيق التاريخ لتدعم العربية والإنجليزية
export function formatDate(date: Date | string, locale: string = 'en') {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-YE' : 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}
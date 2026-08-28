export const navigationConfig = {
  main: [
    { name: { ar: 'الرئيسية', en: 'Home' }, href: '/' },
    { name: { ar: 'من أنا', en: 'About' }, href: '/about' },
    { name: { ar: 'المشاريع', en: 'Projects' }, href: '/#projects' },
    { name: { ar: 'المدونة', en: 'Blog' }, href: '/blog' },
    { name: { ar: 'تواصل معي', en: 'Contact' }, href: '/contact' },
  ],
  footer: [
    { name: { ar: 'من أنا', en: 'About' }, href: '/about' },
    { name: { ar: 'المشاريع', en: 'Projects' }, href: '/#projects' },
    { name: { ar: 'تواصل معي', en: 'Contact' }, href: '/contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/ayman-albaidahi' },
  ]
}

export type NavigationConfig = typeof navigationConfig
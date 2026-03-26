export const navigationConfig = {
  main: [
    { name: { ar: 'الرئيسية', en: 'Home' }, href: '/' },
    { name: { ar: 'من أنا', en: 'About' }, href: '/about' },
    { name: { ar: 'المشاريع', en: 'Projects' }, href: '/projects' },
    { name: { ar: 'المدونة', en: 'Blog' }, href: '/blog' },
    { name: { ar: 'تواصل معي', en: 'Contact' }, href: '/contact' },
  ],
  footer: [
    { name: { ar: 'الخصوصية', en: 'Privacy' }, href: '/privacy' },
    { name: { ar: 'الشروط', en: 'Terms' }, href: '/terms' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/aymanalbaidhi' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ayman-albaydahi' },
    { name: 'Twitter', href: 'https://twitter.com/ayman' },
  ]
}

export type NavigationConfig = typeof navigationConfig
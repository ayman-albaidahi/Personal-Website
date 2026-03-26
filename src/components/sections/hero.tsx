import { Button } from '@/components/ui/button'
import { ArrowRight, MoveLeft } from 'lucide-react' // أضفنا سهم لليسار للنسخة العربية
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Hero({ locale }: { locale: string }) {
  const isAr = locale === 'ar'

  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-48">
      {/* لمسة جمالية: خلفية متدرجة خفيفة */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        
        {/* العنوان الرئيسي - يسحب الاسم من الإعدادات */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {isAr ? 'أهلاً، أنا ' : "Hi, I'm "}
          <span className="text-primary">{siteConfig.author.name}</span>
        </h1>

        {/* الوصف الوظيفي   */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {isAr 
            ? 'مهندس برمجيات متخصص في بناء أنظمة الويب المتكاملة وحلول البرمجيات مفتوحة المصدر، أركز على كفاءة الأداء وجودة الكود.'
            : 'Software Engineer specializing in building full-stack web systems and open-source contributions, focused on performance and clean code.'
          }
        </p>

        {/* الأزرار التفاعلية */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href={`/${locale}/contact`}>
              {isAr ? 'تواصل معي' : 'Get in touch'}
              {isAr ? (
                <MoveLeft className="mr-2 h-5 w-5" /> 
              ) : (
                <ArrowRight className="ml-2 h-5 w-5" />
              )}
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild className="rounded-full px-8">
            <Link href={`/${locale}/projects`}>
              {isAr ? 'عرض أعمالي' : 'View my work'}
            </Link>
          </Button>
        </div>
      </div>

      {/* لمسة فنية: شكل جمالي في الخلفية (اختياري) */}
      <div className="absolute top-0 -z-10 h-full w-full opacity-10 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </section>
  )
}
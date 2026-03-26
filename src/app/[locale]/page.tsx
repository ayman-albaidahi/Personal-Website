import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* خلفية جمالية خفيفة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 blur-3xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          
          {/* صورة شخصية أو شعار افتراضي */}
          <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden animate-fade-in">
             <div className="w-full h-full bg-primary-600 flex items-center justify-center text-white text-4xl font-bold">
               أ
             </div>
          </div>

          <div className="space-y-4 animate-slide-up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
              أهلاً، أنا <span className="text-primary-600">أيمن البيدحي</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-slate-600 dark:text-slate-400 md:text-xl font-sans">
              مطور برمجيات شغوف ببناء تطبيقات الويب والأنظمة المتكاملة. متخصص في تقنيات 
              <span className="font-semibold text-slate-900 dark:text-white"> .NET (C#) </span> 
              و <span className="font-semibold text-slate-900 dark:text-white">Next.js</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-500">
            <Link 
              href="/ar/projects" 
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary-600 px-8 text-sm font-medium text-white shadow transition-transform hover:scale-105 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-700"
            >
              تصفح مشاريعي
            </Link>
            <Link 
              href="/ar/contact" 
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-transform hover:scale-105 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 dark:bg-slate-900 dark:text-white dark:border-slate-800"
            >
              تواصل معي
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-3xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white"><BookOpen className="h-5 w-5" /></div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Journal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">{isArabic ? "ملاحظات من رحلة التعلم" : "Notes from the learning journey"}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{isArabic ? "مساحة لكتابة الدروس والأفكار التي أكتسبها أثناء بناء المشاريع وتطوير مهاراتي." : "A space for lessons and ideas I collect while building projects and developing my engineering skills."}</p>
      </div>
      <article className="mt-14 max-w-3xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-medium text-blue-600">Coming soon</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">{isArabic ? "المقالات قيد الإعداد" : "Articles are on the way"}</h2>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{isArabic ? "سأشارك هنا تجاربي في هندسة البرمجيات، تطوير الويب، وبناء المشاريع العملية." : "I will share practical notes about software engineering, web development, and building real projects here."}</p>
        <Link href={`/${locale}/contact`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300">{isArabic ? "تواصل معي" : "Get in touch"}<ArrowUpRight className="h-4 w-4" /></Link>
      </article>
    </section>
  );
}

import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isArabic = locale === "ar";
  const BackIcon = isArabic ? ArrowRight : ArrowLeft;

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white"><BookOpen className="h-5 w-5" /></div>
      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{slug}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{isArabic ? "مقال قيد الإعداد" : "Article in progress"}</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{isArabic ? "سيتم نشر هذا المقال قريبًا مع تفاصيل عملية من رحلة بناء المشاريع وتعلم هندسة البرمجيات." : "This article will be published soon with practical notes from building projects and learning software engineering."}</p>
      <Link href={`/${locale}/blog`} className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300"><BackIcon className="h-4 w-4" />{isArabic ? "العودة إلى المدونة" : "Back to journal"}</Link>
    </article>
  );
}

import Link from "next/link";
import { ArrowUpRight, Code2, Mail } from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Mail className="h-6 w-6" />
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          {isArabic ? "لنبنِ شيئًا مفيدًا." : "Let's build something useful."}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {isArabic
            ? "أفضل طريقة لمتابعة أعمالي ومشاريعي الحالية هي عبر GitHub. يمكنك الاطلاع على المستودعات ومتابعة تقدمي في التعلم وبناء البرمجيات."
            : "The best way to follow my current work and projects is through GitHub. Explore my repositories and follow my progress as I learn and build software."}
        </p>
        <Link href="https://github.com/ayman-albaidahi" target="_blank" rel="noreferrer" className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
          <Code2 className="h-4 w-4" />
          {isArabic ? "زيارة GitHub" : "Visit GitHub"}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

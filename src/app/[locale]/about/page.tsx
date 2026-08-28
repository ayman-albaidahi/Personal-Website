import Link from "next/link";
import { ArrowUpRight, Code2, Database, Layers3 } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
          {isArabic ? "أتعلم، أبني، وأتطور باستمرار." : "Learning, building, and improving continuously."}
        </h1>
        <p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {isArabic
            ? "أنا أيمن البيدحي، طالب علوم حاسوب في جامعة إب من اليمن. أعمل على تحويل ما أتعلمه إلى مشاريع عملية تساعدني على فهم هندسة البرمجيات وتطوير الويب بصورة أعمق."
            : "I am Ayman Al-Baidhi, a Computer Science student at Ibb University from Yemen. I turn what I learn into practical projects that help me understand software engineering and web development more deeply."}
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {[
          { icon: Code2, title: isArabic ? "تطوير البرمجيات" : "Software development", text: isArabic ? "بناء تطبيقات عملية باستخدام C# وPython وJavaScript." : "Building practical applications with C#, Python, and JavaScript." },
          { icon: Layers3, title: isArabic ? "هندسة الأنظمة" : "System thinking", text: isArabic ? "فهم البنية، فصل المسؤوليات، وكتابة كود قابل للصيانة." : "Understanding structure, separation of concerns, and maintainable code." },
          { icon: Database, title: isArabic ? "التعلم بالممارسة" : "Learning by doing", text: isArabic ? "تحويل المفاهيم إلى مشاريع وتجارب قابلة للعرض والتحسين." : "Turning concepts into projects and experiments that can be reviewed and improved." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Icon className="h-6 w-6 text-blue-600" />
            <h2 className="mt-6 text-lg font-bold text-slate-950 dark:text-white">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8 dark:border-blue-950 dark:bg-blue-950/30">
        <p className="max-w-2xl text-lg leading-8 text-blue-950 dark:text-blue-100">
          {isArabic ? "هدفي هو الاستمرار في بناء أساس قوي في هندسة البرمجيات، والمساهمة في مشاريع ذات قيمة، والنمو نحو دور مهندس برمجيات محترف." : "My goal is to build a strong foundation in software engineering, contribute to meaningful projects, and grow toward a professional software engineering role."}
        </p>
        <Link href={`/${locale}/contact`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300">
          {isArabic ? "تواصل معي" : "Get in touch"} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

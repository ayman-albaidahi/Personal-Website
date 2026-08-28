import Link from "next/link";
import { ArrowUpRight, Code2, Database, Layers3, MapPin, Sparkles } from "lucide-react";

const projects = [
  {
    title: "DVLD",
    description: {
      en: "A driving and vehicle licensing system built with C#, SQL Server, and a clear 3-tier architecture.",
      ar: "نظام لإدارة تراخيص القيادة والمركبات مبني باستخدام C# وSQL Server وبنية ثلاثية الطبقات.",
    },
    stack: "C# · SQL Server · 3-Tier",
    href: "https://github.com/ayman-albaidahi/DVLD",
  },
  {
    title: "Smart Weather Prediction",
    description: {
      en: "A Python project exploring weather prediction concepts and data-driven problem solving.",
      ar: "مشروع Python يستكشف مفاهيم التنبؤ بالطقس وحل المشكلات بالاعتماد على البيانات.",
    },
    stack: "Python · Data",
    href: "https://github.com/ayman-albaidahi/Smart-Weather-Prediction",
  },
  {
    title: "Agentic Personal Assistant",
    description: {
      en: "A web-based exploration of personal-assistant concepts, AI logic, and system architecture.",
      ar: "استكشاف لمفاهيم المساعد الشخصي والمنطق الذكي وهندسة الأنظمة عبر مشروع ويب.",
    },
    stack: "HTML · CSS · JavaScript",
    href: "https://github.com/ayman-albaidahi/agentic-personal-assistant",
  },
];

const technologies = ["C#", "Python", "TypeScript", "JavaScript", "SQL Server", "Next.js"];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const copy = isArabic
    ? {
        eyebrow: "طالب علوم حاسوب · مطور برمجيات مستقبلي",
        title: "أبني حلولًا برمجية واضحة، عملية، وقابلة للتطور.",
        intro:
          "أنا أيمن البيدحي، طالب علوم حاسوب في جامعة إب من اليمن. أتعلم من خلال بناء مشاريع حقيقية تجمع بين هندسة البرمجيات وتطوير الويب وحل المشكلات.",
        projects: "مشاريع مختارة",
        projectsIntro: "نماذج عملية من رحلتي في التعلم وبناء الأنظمة.",
        about: "نبذة عني",
        aboutText:
          "أركز على كتابة كود منظم، فهم بنية الأنظمة، وتحويل الأفكار إلى منتجات قابلة للاستخدام. أؤمن بأن التطور المستمر يبدأ من مشروع صغير يُنفّذ بعناية.",
        viewProjects: "استكشف المشاريع",
        contact: "لنتواصل",
        location: "إب، اليمن",
        focus: "أتعلم وأبني باستمرار",
        explore: "عرض المشروع",
        stack: "التقنيات التي أستخدمها",
      }
    : {
        eyebrow: "Computer Science Student · Future Software Engineer",
        title: "I build clear, practical, and scalable software solutions.",
        intro:
          "I'm Ayman Al-Baidhi, a Computer Science student at Ibb University from Yemen. I learn by building real projects across software engineering, web development, and problem solving.",
        projects: "Selected Projects",
        projectsIntro: "Practical examples from my learning and engineering journey.",
        about: "A little about me",
        aboutText:
          "I focus on writing organized code, understanding system architecture, and turning ideas into useful products. I believe consistent growth starts with small projects built with care.",
        viewProjects: "Explore projects",
        contact: "Let's connect",
        location: "Ibb, Yemen",
        focus: "Always learning and building",
        explore: "View project",
        stack: "Technologies I use",
      };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_34%),radial-gradient(circle_at_15%_30%,rgba(14,165,233,0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-20" />

      <section className="container mx-auto px-4 pb-20 pt-16 sm:px-6 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur dark:border-blue-900 dark:bg-slate-900/70 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              <span>{copy.eyebrow}</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              {copy.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}#projects`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                {copy.viewProjects}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:border-blue-500 dark:hover:text-blue-300"
              >
                {copy.contact}
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" />{copy.location}</span>
              <span className="inline-flex items-center gap-2"><Code2 className="h-4 w-4 text-blue-600" />{copy.focus}</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-7 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
              <div className="flex items-center justify-between border-b border-slate-200 pb-6 dark:border-slate-800">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{isArabic ? "الملف الشخصي" : "Profile snapshot"}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">Ayman Al-Baidhi</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/25">أ</div>
              </div>
              <div className="grid grid-cols-2 gap-3 py-6">
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800/80"><p className="text-2xl font-bold text-slate-950 dark:text-white">8+</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{isArabic ? "مستودعات عامة" : "Public repositories"}</p></div>
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800/80"><p className="text-2xl font-bold text-slate-950 dark:text-white">3</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{isArabic ? "مجالات رئيسية" : "Core areas"}</p></div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900 dark:border-blue-950 dark:bg-blue-950/40 dark:text-blue-100">
                <Layers3 className="mt-0.5 h-5 w-5 shrink-0" />
                <p>{isArabic ? "هندسة برمجيات · تطوير ويب · تعلم مستمر" : "Software engineering · Web development · Continuous learning"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-slate-200/80 bg-white/60 py-20 dark:border-slate-800/80 dark:bg-slate-950/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Portfolio</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{copy.projects}</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{copy.projectsIntro}</p>
            </div>
            <Link href="https://github.com/ayman-albaidahi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">
              <Code2 className="h-4 w-4" /> GitHub <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"><Code2 className="h-5 w-5" /></div>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-400">{project.description[isArabic ? "ar" : "en"]}</p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <span>{project.stack}</span>
                  <Link href={project.href} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-300">{copy.explore}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{copy.about}</h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{copy.aboutText}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((technology) => <span key={technology} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">{technology}</span>)}
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400"><Database className="h-4 w-4 text-blue-600" />{copy.stack}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

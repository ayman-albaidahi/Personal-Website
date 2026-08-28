import Link from "next/link";
import { ArrowUpRight, Code2, Database, Layers3, MapPin, Sparkles } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "DVLD",
    type: { en: "Business system", ar: "نظام أعمال" },
    description: {
      en: "A structured driving and vehicle licensing platform built around C#, SQL Server, and a 3-tier architecture.",
      ar: "منصة منظمة لإدارة تراخيص القيادة والمركبات، مبنية باستخدام C# وSQL Server وبنية ثلاثية الطبقات.",
    },
    stack: "C# / SQL Server / 3-Tier",
    href: "https://github.com/ayman-albaidahi/DVLD",
  },
  {
    number: "02",
    title: "Smart Weather",
    type: { en: "Data experiment", ar: "تجربة بيانات" },
    description: {
      en: "A Python project exploring weather prediction concepts through practical, data-driven problem solving.",
      ar: "مشروع Python يستكشف مفاهيم التنبؤ بالطقس من خلال حل مشكلات عملي يعتمد على البيانات.",
    },
    stack: "Python / Prediction",
    href: "https://github.com/ayman-albaidahi/Smart-Weather-Prediction",
  },
  {
    number: "03",
    title: "Personal Assistant",
    type: { en: "Web exploration", ar: "استكشاف ويب" },
    description: {
      en: "A web-based exploration of assistant experiences, AI logic, and thoughtful system architecture.",
      ar: "استكشاف لتجارب المساعد الشخصي والمنطق الذكي وهندسة الأنظمة عبر الويب.",
    },
    stack: "HTML / CSS / JavaScript",
    href: "https://github.com/ayman-albaidahi/agentic-personal-assistant",
  },
];

const capabilities = [
  { icon: Code2, title: { en: "Build", ar: "أبني" }, text: { en: "Practical software with a clear purpose.", ar: "برمجيات عملية بهدف واضح." } },
  { icon: Layers3, title: { en: "Structure", ar: "أنظم" }, text: { en: "Systems that are easier to understand and maintain.", ar: "أنظمة أسهل للفهم والصيانة." } },
  { icon: Database, title: { en: "Grow", ar: "أتطور" }, text: { en: "One project, one lesson, one iteration at a time.", ar: "مشروع ودرس وتحسين في كل مرحلة." } },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const language = isArabic ? "ar" : "en";
  const copy = isArabic
    ? {
        kicker: "ملف شخصي لمهندس برمجيات مستقبلي",
        role: "طالب علوم حاسوب · مطور برمجيات",
        title: "أحوّل الفضول إلى برمجيات يمكن استخدامها.",
        intro: "أنا أيمن البيدحي، طالب علوم حاسوب في جامعة إب من اليمن. أبني مشاريع عملية لأفهم الأنظمة بعمق، وأطوّر مهاراتي خطوة بعد خطوة.",
        viewWork: "شاهد أعمالي",
        about: "عنّي",
        selected: "أعمال مختارة",
        selectedIntro: "ثلاثة مشاريع تمثل طريقة تفكيري: هدف واضح، بنية مفهومة، وتعلم مستمر.",
        allProjects: "كل المشاريع على GitHub",
        capabilities: "كيف أعمل",
        capabilitiesIntro: "لا أبحث عن التعقيد؛ أبحث عن حل واضح يؤدي الغرض ويمكن تطويره.",
        based: "مقيم في إب، اليمن",
        available: "أتعلم وأبني باستمرار",
        open: "فتح المستودع",
      }
    : {
        kicker: "A future software engineer's portfolio",
        role: "Computer Science student · Software developer",
        title: "I turn curiosity into software people can use.",
        intro: "I'm Ayman Al-Baidhi, a Computer Science student at Ibb University in Yemen. I build practical projects to understand systems deeply and improve one step at a time.",
        viewWork: "View my work",
        about: "About me",
        selected: "Selected work",
        selectedIntro: "Three projects that represent how I think: clear purpose, thoughtful structure, and continuous learning.",
        allProjects: "All projects on GitHub",
        capabilities: "How I work",
        capabilitiesIntro: "I am not looking for complexity; I am looking for clear solutions that can evolve.",
        based: "Based in Ibb, Yemen",
        available: "Always learning and building",
        open: "Open repository",
      };

  return (
    <main className="bg-[#07111f] text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-56 right-[-10rem] -z-10 h-[36rem] w-[36rem] rounded-full bg-orange-400/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="container mx-auto px-5 pb-24 pt-16 sm:px-8 lg:pb-32 lg:pt-24">
          <div className="mb-16 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            <span>AYMAN / 2026</span>
            <span className="hidden items-center gap-2 sm:inline-flex"><span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />{copy.kicker}</span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-3 text-sm font-medium text-cyan-300"><Sparkles className="h-4 w-4" />{copy.role}</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.8rem]">
                {copy.title}
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{copy.intro}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={`/${locale}#projects`} className="group inline-flex h-12 items-center gap-3 rounded-full bg-orange-400 px-6 text-sm font-bold text-[#07111f] transition hover:bg-orange-300">
                  {copy.viewWork}<ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href={`/${locale}/about`} className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300">{copy.about}</Link>
              </div>
            </div>

            <div className="relative lg:pb-2">
              <div className="absolute -inset-5 rounded-[2rem] border border-cyan-300/10" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0d1b2d]/90 shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-[10px] uppercase tracking-[0.24em] text-slate-500"><span>profile.tsx</span><span>01 — 04</span></div>
                <div className="p-6 sm:p-8">
                  <div className="mb-10 flex items-start justify-between gap-6">
                    <div><p className="text-sm text-slate-400">{isArabic ? "مرحبًا، أنا" : "Hello, I'm"}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-white">Ayman<span className="text-orange-400">.</span></p></div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-300/30 bg-orange-400/10 text-2xl font-semibold text-orange-300">أ</div>
                  </div>
                  <div className="space-y-5 font-mono text-sm">
                    <p><span className="text-cyan-300">const</span> <span className="text-orange-300">focus</span> = <span className="text-emerald-300">&quot;software engineering&quot;</span></p>
                    <p><span className="text-cyan-300">const</span> <span className="text-orange-300">stack</span> = [<span className="text-emerald-300">&quot;C#&quot;</span>, <span className="text-emerald-300">&quot;Python&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>]</p>
                    <p><span className="text-cyan-300">return</span> <span className="text-slate-300">buildWithPurpose</span>()</p>
                  </div>
                  <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-xs"><div><p className="text-2xl font-semibold text-white">8</p><p className="mt-1 text-slate-500">{isArabic ? "مستودعات عامة" : "public repos"}</p></div><div><p className="text-2xl font-semibold text-white">Ibb</p><p className="mt-1 text-slate-500">{isArabic ? "اليمن" : "Yemen"}</p></div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs text-slate-400"><span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-orange-400" />{copy.based}</span><span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{copy.available}</span></div>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-5 py-24 sm:px-8 lg:py-32">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">02 / Portfolio</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{copy.selected}</h2><p className="mt-4 max-w-xl leading-7 text-slate-400">{copy.selectedIntro}</p></div>
          <Link href="https://github.com/ayman-albaidahi?tab=repositories" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">{copy.allProjects}<ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {projects.map((project) => (
            <article key={project.number} className="group grid gap-5 py-8 transition hover:bg-white/[0.03] sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:gap-8 sm:px-5">
              <span className="font-mono text-sm text-orange-300">{project.number}</span>
              <div><div className="flex flex-wrap items-center gap-3"><h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3><span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">{project.type[language]}</span></div><p className="mt-3 max-w-2xl leading-7 text-slate-400">{project.description[language]}</p><p className="mt-5 font-mono text-xs text-cyan-300/80">{project.stack}</p></div>
              <Link href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition group-hover:text-orange-300 sm:pt-1">{copy.open}<ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b192a]">
        <div className="container mx-auto grid gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
          <div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">03 / {copy.capabilities}</p><h2 className="mt-4 max-w-md text-4xl font-semibold tracking-tight text-white sm:text-5xl">{copy.capabilitiesIntro}</h2></div>
          <div className="grid gap-4">
            {capabilities.map(({ icon: Icon, title, text }, index) => <div key={title.en} className="flex gap-5 border-t border-white/10 py-6"><span className="font-mono text-xs text-slate-500">0{index + 1}</span><Icon className="mt-1 h-5 w-5 shrink-0 text-cyan-300" /><div><h3 className="text-lg font-semibold text-white">{title[language]}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text[language]}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-20 text-center sm:px-8 lg:py-28"><p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">04 / End of page</p><p className="mx-auto mt-5 max-w-xl text-2xl font-medium tracking-tight text-white sm:text-3xl">{isArabic ? "كل مشروع هو خطوة نحو مهندس أفضل." : "Every project is a step toward becoming a better engineer."}</p><Link href={`/${locale}/contact`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200">{isArabic ? "لنتحدث" : "Let's talk"}<ArrowUpRight className="h-4 w-4" /></Link></section>
    </main>
  );
}

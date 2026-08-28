import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayman Al-Baidhi | Software Engineer",
  description: "Personal website of Ayman Al-Baidhi, a software engineer specializing in web development.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#07111f] antialiased transition-colors duration-300",
          inter.variable,
          merriweather.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* استدعاء الهيدر الذي تعبنا في برمجته */}
          <Header />
          
          <main className="flex-1">
            {children}
          </main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}




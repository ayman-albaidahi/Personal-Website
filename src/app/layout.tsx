import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="antialiased bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="min-h-screen flex flex-col">
          {/* هنا يمكنك إضافة Navbar لاحقاً */}
          <main className="flex-grow">
            {children}
          </main>
          {/* هنا يمكنك إضافة Footer لاحقاً */}
        </div>
      </body>
    </html>
    
  );
}

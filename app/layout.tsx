import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breathing Bot | Medical-Grade Technical Trainer",
  description: "Free breathing exercises, coherent breathing, and meditation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col min-h-screen antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {/* Skip to Main Content Accessibility Link */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:bg-black focus:text-white focus:z-[2000] focus:font-semibold focus:rounded-br-md focus:no-underline"
          >
            Skip to main content
          </a>

          {/* Global Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <main id="main-content" className="flex-grow flex flex-col">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-center py-6 mt-auto border-t border-slate-300 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
              <p className="text-sm mb-2">
                © 2026 Breathing Bot. Designed for accessibility. Completely free and open-source.
              </p>
              <Link href="/privacy" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors underline underline-offset-2">
                Privacy Policy
              </Link>
            </div>
          </footer>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
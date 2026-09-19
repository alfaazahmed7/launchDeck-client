import SmoothScrollProvider from "@/components/providers/scroll/SmoothScrollProvider";
import ThemeProvider from "@/components/providers/theme/ThemeProvider";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Analytics } from "@vercel/analytics/next";
import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const FigtreeFont = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LaunchDeck",
    template: "%s | LaunchDeck",
  },
  description:
    "LaunchDeck is the open-source showcase platform where builders publish, discover, and launch software projects, AI tools, and developer utilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${FigtreeFont.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-slate-950 text-white">

        <ThemeProvider>
          <SmoothScrollProvider>
            {/* GLOBAL BACKGROUND SYSTEM */}
            <div className="pointer-events-none fixed inset-0 z-0">
              {/* Persistent Subtle Grid Layout */}
              <div
                className="
                  absolute inset-0
                  bg-[size:4rem_4rem]
                  bg-[linear-gradient(to_right,rgba(51,65,85,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.025)_1px,transparent_1px)]
                  dark:bg-[linear-gradient(to_right,#33415512_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)]
                  ld-grid
                "
              />

              {/* Ambient Corner Glow Spots */}
              <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 dark:bg-blue-600/10 ld-glow-accent blur-[140px]" />
              <div className="absolute bottom-10 right-0 h-[600px] w-[600px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 ld-glow-success blur-[140px]" />
            </div>

            {/* APPLICATION WRAPPER */}
            <div className="relative z-10 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Toaster />
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StyleSwitcher } from "@/components/StyleSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "True North – Innerlijk kompas voor werk en leven",
  description:
    "Een 4-weekse cursus voor jonge professionals. Leer beslissingen maken vanuit wat echt belangrijk voor je is.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-[#4a7ba7]/15 bg-white/90 backdrop-blur-md shadow-sm py-3.5 px-4 md:px-6">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <Link href="/" className="font-semibold text-[#1f3a5f]">
              True North
            </Link>
            <Suspense fallback={<span className="text-sm text-[#1f3a5f]/50">Variant: …</span>}>
              <StyleSwitcher />
            </Suspense>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

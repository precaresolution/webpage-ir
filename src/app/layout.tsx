import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import localFont from "next/font/local";

const gongGothic = localFont({
  src: "../assets/fonts/GongGothicLight.ttf",
  variable: "--font-gong",
});

const mbcGulim = localFont({
  src: "../assets/fonts/MBC1961GulimM.ttf",
  variable: "--font-mbc",
});

export const metadata: Metadata = {
  title: site.name,
  description: "프리케어 솔루션 IR 홈페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`scroll-smooth ${gongGothic.variable} ${mbcGulim.variable}`}> 
      <body className="flex min-h-screen flex-col bg-transperent text-gray-900 antialiased">
        <Header className="fixed left-0 top-0 z-50 w-full"/>
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

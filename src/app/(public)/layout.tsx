import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ".././globals.css";
import PublicHeader from "@/src/app/(public)/_components/header/PublicHeader.component";
import PublicFooter from "@/src/app/(public)/_components/footer/PublicFooter.component";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YumeLog",
  description: "夢を叶えるためのアプリケーション ランディングページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${nunito.variable} flex min-h-screen flex-col bg-slate-50 antialiased`}
      >
        <PublicHeader />
        <main className="flex-grow">{children}</main>
        <PublicFooter />
      </body>
    </html>
  );
}

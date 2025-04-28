import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";

// FontはNunitoを使用するため、NotoSansはコメントアウト
// const notoSans = Noto_Sans({
//   variable: "--font-noto-sans",
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   display: "swap",
// });

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashboardアプリケーション",
  description: "ブログ投稿〜確認",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${nunito.variable} flex flex-col min-h-screen antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

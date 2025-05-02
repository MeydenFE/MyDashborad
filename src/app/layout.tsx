import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/src/components/ui/sidebar";
import { AppSidebar } from "@/src/components/common/AppSidebar";
import SessionProviderWrapper from "@/src/app/providers/SessionProviderWrapper";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YumeLog",
  description: "夢を叶えるためのダッシュボード TOP画面",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${nunito.variable} flex min-h-screen flex-col antialiased`}
      >
        <SessionProviderWrapper>
          <SidebarProvider>
            <AppSidebar />
            {children}
          </SidebarProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}

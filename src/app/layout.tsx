import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/src/app/_components/header/Header.page";
import { SidebarProvider } from "@/src/components/ui/sidebar";
import { AppSidebar } from "@/src/components/common/AppSidebar";
import { Box } from "@/src/components/ui/Box";

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
        <SidebarProvider>
          <AppSidebar />

          <Box className="flex flex-1 flex-col bg-slate-50">
            <Header />
            {children}
          </Box>
        </SidebarProvider>
      </body>
    </html>
  );
}

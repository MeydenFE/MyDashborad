import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ".././globals.css";
import { SidebarProvider } from "@/src/components/ui/sidebar";
import { AppSidebar } from "@/src/components/common/AppSidebar";
import SessionProviderWrapper from "@/src/app/providers/SessionProviderWrapper";
import { Box } from "@/src/components/ui/Box";
import Header from "@/src/app/(auth)/_components/header/Header.page";

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
            <Box className="flex flex-1 flex-col bg-slate-50">
              <Header />
              {children}
            </Box>
          </SidebarProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}

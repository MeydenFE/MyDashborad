import type { Metadata } from "next";
import Header from "@/src/app/dashboard/_components/header/Header.page";
import { Box } from "@/src/components/ui/Box";

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
    <Box className="flex flex-1 flex-col bg-slate-50">
      <Header />
      {children}
    </Box>
  );
}

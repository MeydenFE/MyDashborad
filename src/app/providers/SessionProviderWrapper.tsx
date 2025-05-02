"use client";

import { SessionProvider } from "next-auth/react";

// NextAuth用　プロバイダー
export default function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}

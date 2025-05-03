// app/setup/step1/page.tsx
// "use client";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import SetupStep1 from "@/src/app/(public)/setup/step1/SetupStep1";

export default async function Step1Page() {
  /*═══════════════════════════════════════
  Detabaseからユーザー情報を取得 - RSC
═══════════════════════════════════════*/
  const session = await getServerSession(authOptions);

  // ユーザー情報がない場合は、ランディングページへ遷移
  if (!session?.user.email) {
    redirect("landing");
  }

  const user: { dream: string | null } | null = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { dream: true },
  });

  return (
    <>
      <SetupStep1 initialDream={user?.dream ?? ""} />
    </>
  );
}

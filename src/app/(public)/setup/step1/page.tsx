import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import SetupStep1 from "@/src/app/(public)/setup/step1/SetupStep1";

/** セットアップページ 1/4設定画面TOP */
export default async function Step1Page() {
  /*═══════════════════════════════════════
  Detabaseからユーザー情報を取得 - RSC
═══════════════════════════════════════*/
  const session = await getServerSession(authOptions);

  // ユーザー情報がない場合は、ランディングページへ遷移
  if (!session?.user.email) {
    redirect("landing");
  }

  // ユーザー情報に紐づく夢を取得
  const userWithDream = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      dream: {
        select: {
          title: true,
        },
      },
    },
  });

  const dreamTitle = userWithDream?.dream?.title ?? null;

  return (
    <>
      <SetupStep1 initialDream={dreamTitle} />
    </>
  );
}

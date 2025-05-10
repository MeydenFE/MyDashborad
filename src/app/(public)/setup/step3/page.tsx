import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import SetupStep3 from "@/src/app/(public)/setup/step3/SetupStep3";

/** セットアップページ 3/4設定画面TOP */
export default async function Step3Page() {
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
          memo: true,
        },
      },
    },
  });

  const title = userWithDream?.dream?.title ?? null;
  const memo = userWithDream?.dream?.memo ?? null;

  // title が未登録なら Step1 に戻す
  if (!title) {
    redirect("/setup/step1");
  }

  return (
    <>
      <SetupStep3 title={title} initialMemo={memo} />
    </>
  );
}

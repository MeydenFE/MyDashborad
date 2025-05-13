import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

/** セッション情報　チェック用コンポーネント */
export async function ensureAuthenticatedUser() {
  /*═══════════════════════════════════════
    Detabaseからユーザー情報を取得 - RSC
  ═══════════════════════════════════════*/
  const session = await getServerSession(authOptions);

  // session情報がない場合、ログインページへ遷移
  if (!session) {
    redirect("/login");
  }
  // セットアップが済んでいない場合は、セットアップページへレンダリング
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (user?.setupStep !== "complete") {
    redirect("/setup");
  }

  return { session, user };
}

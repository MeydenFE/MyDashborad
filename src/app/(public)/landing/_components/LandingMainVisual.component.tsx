import { Button } from "@/src/components/ui/button";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";

/** ランディングページ　メインビジュアル画面表示用　コンポーネント */
const LandingMainVisual = async () => {
  /*═══════════════════════════════════════
    Detabaseからユーザー情報を取得 - RSC
  ═══════════════════════════════════════*/
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  let user = null;

  if (email) {
    user = await prisma.user.findUnique({
      where: { email },
    });
  }
  return (
    <>
      <h2 className="mb-4 text-4xl font-bold">夢を、カタチに。</h2>
      <p className="mb-6 max-w-xl text-lg text-gray-600">
        <span className="text-main font-semibold">YumeLog</span>
        はあなたの夢・目標・行動を整理し、進捗を可視化するための個人専用ダッシュボードアプリです。
      </p>

      {user ? (
        <Button size="lg" asChild>
          <Link href="/dashboard">夢の記録を始める</Link>
        </Button>
      ) : (
        <Button size="lg" asChild>
          <Link href="/register">今すぐはじめる</Link>
        </Button>
      )}
    </>
  );
};

export default LandingMainVisual;

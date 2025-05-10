import Dashboard from "@/src/app/(auth)/dashboard/_components/dashboard/Dashboard.page";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

/** Dashboard画面　TOPページ　画面表示 */
const TopPage = async () => {
  /*═══════════════════════════════════════
    Detabaseからユーザー情報を取得 - RSC
  ═══════════════════════════════════════*/

  const session = await getServerSession(authOptions);

  // セットアップが済んでいない場合は、セットアップページへレンダリング
  const user = await prisma.user.findUnique({
    where: { id: session?.user.id },
  });
  if (user?.setupStep !== "complete") {
    redirect("/setup");
  }

  return (
    <main className="flex flex-1">
      <Dashboard />
    </main>
  );
};

export default TopPage;

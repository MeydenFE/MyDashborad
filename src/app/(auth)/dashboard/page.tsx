import Dashboard from "@/src/app/(auth)/dashboard/_components/dashboard/Dashboard.page";
import { authOptions } from "@/src/lib/auth";
import { ensureAuthenticatedUser } from "@/src/lib/auth/sessionCheck";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

/** Dashboard画面　TOPページ　画面表示 */
const TopPage = async () => {
  // セッション情報チェック
  await ensureAuthenticatedUser();

  return (
    <main className="flex flex-1">
      <Dashboard />
    </main>
  );
};

export default TopPage;

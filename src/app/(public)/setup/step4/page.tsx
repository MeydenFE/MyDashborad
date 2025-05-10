import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import SetupStep4 from "@/src/app/(public)/setup/step4/SetupStep4";
import { getUnsplashImages } from "@/src/app/(public)/setup/actions";

/** セットアップページ 4/4設定画面TOP */
export default async function Step4Page() {
  /*═══════════════════════════════════════
  Detabaseからユーザー情報を取得 - RSC
═══════════════════════════════════════*/
  const session = await getServerSession(authOptions);

  // ユーザー情報がない場合は、ランディングページへ遷移
  if (!session?.user.email) {
    redirect("landing");
  }

  const projects = await prisma.project.findMany({
    where: { userId: session.user.id },
    select: {
      id: true,
      title: true,
      imageUrl: true,
    },
  });

  // Unsplash API から画像データ取得
  const unsplashImages = await getUnsplashImages();

  return (
    <>
      <SetupStep4 initialProjects={projects} unsplashImages={unsplashImages} />
    </>
  );
}

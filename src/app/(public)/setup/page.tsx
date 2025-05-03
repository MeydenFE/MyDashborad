// app/setup/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { prisma } from "@/src/lib/prisma"; // Prisma Client
import { authOptions } from "@/src/lib/auth";

export default async function SetupRootPage() {
  const session = await getServerSession(authOptions);
  console.log("SESSION @ /setup:", session);

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { setupStep: true },
  });

  // TODO: エラーの場合は、エラーページを将来作りたい
  if (!user || !user.setupStep) {
    redirect("/setup/step1");
  }

  // setupが既に済んでいるアカウントの場合はdashboardへリダイレクト
  if (user.setupStep === "complete") {
    redirect("/dashboard");
  }

  // 数値ステップに応じてリダイレクト
  redirect(`/setup/step${user.setupStep}`);
}

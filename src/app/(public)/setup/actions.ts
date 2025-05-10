"use server";

import { Project } from "@/src/app/(public)/setup/types/setup.type";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";

/** Step 1 夢のタイトル設定　ServerActions */
export const saveDream = async (dream: string, nextStep: string) => {
  const session = await getServerSession(authOptions);

  //   TODO:エラーページ作成したい
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  await prisma.dream.upsert({
    where: {
      userId: session.user.id,
    },
    update: {
      title: dream,
    },
    create: {
      userId: session.user.id,
      title: dream,
    },
  });

  await prisma.user.update({
    where: { email: session.user.email },
    data: { setupStep: nextStep },
  });
};

/** Step 2 夢の目標日設定　ServerActions */
export async function updateTargetDate(dateString: string, nextStep: string) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return;

  const targetDate = new Date(dateString);

  await prisma.dream.update({
    where: {
      userId: session.user.id,
    },
    data: {
      targetDate,
      user: {
        update: {
          setupStep: nextStep,
        },
      },
    },
  });
}

/** Step 3 夢の詳細設定　ServerActions */
export async function updateMemo(memo: string, nextStep: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return;

  await prisma.dream.update({
    where: { userId: session.user.id },
    data: {
      memo,
      user: {
        update: { setupStep: nextStep },
      },
    },
  });
}

/** Step 4 プロジェクト設定　ServerActions */
export async function updateProjects(projects: Project[], nextStep: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return;

  // 既存のプロジェクトID一覧を取得
  const existingProjects = await prisma.project.findMany({
    where: { userId: session.user.id },
    select: { id: true },
  });
  const existingIds = new Set(existingProjects.map((p) => p.id));
  const newIds = new Set(projects.map((p) => p.id));

  // 削除されたプロジェクトのIDを特定
  const deletedIds = [...existingIds].filter((id) => !newIds.has(id));

  // 削除処理
  if (deletedIds.length > 0) {
    await prisma.project.deleteMany({
      where: {
        id: { in: deletedIds },
      },
    });
  }

  // upsert（更新 or 作成）
  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      create: {
        id: project.id,
        title: project.title,
        imageUrl: project.imageUrl ?? null,
        userId: session.user.id,
        status: "draft",
      },
      update: {
        title: project.title,
        imageUrl: project.imageUrl ?? null,
      },
    });
  }

  // setupStepの更新
  await prisma.user.update({
    where: { id: session.user.id },
    data: { setupStep: nextStep },
  });
}

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function getUnsplashImages() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=10&query=dream&client_id=${UNSPLASH_ACCESS_KEY}`,
    {
      next: { revalidate: 60 }, // キャッシュ制御（任意）
    },
  );

  if (!response.ok) {
    throw new Error("Unsplash APIの取得に失敗しました");
  }

  const images = await response.json();

  return images.map((img: any) => ({
    id: img.id,
    url: img.urls.small,
    alt: img.alt_description || "Unsplash Image",
  }));
}

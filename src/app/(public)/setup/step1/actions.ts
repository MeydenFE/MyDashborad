"use server";

import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";

/** 夢登録　ServerActions　コンポーネント */
export const saveDream = async (dream: string, nextStep: string) => {
  const session = await getServerSession(authOptions);

  //   TODO:エラーページ作成したい
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  await prisma.user.update({
    where: { email: session.user.email },
    data: { dream, setupStep: nextStep },
  });
};

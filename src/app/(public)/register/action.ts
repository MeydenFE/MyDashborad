"use server";

import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

/** ユーザー登録　ServerActions　コンポーネント */
export const registerUser = async (
  prevState: { error: string | null },
  formData: FormData,
): Promise<{ error: string | null }> => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return { error: "入力値が不正です" };
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return { error: "既に登録済みのメールアドレスです" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });
  redirect("/dashboard");
};

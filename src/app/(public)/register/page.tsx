"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/src/components/ui/card";
import { Box } from "@/src/components/ui/Box";
import Link from "next/link";
import { registerUser } from "@/src/app/(public)/register/action";
import { useFormState } from "react-dom";

/** ユーザー登録ページ　画面表示用　コンポーネント */
const RegisterPage = () => {
  const router = useRouter();

  /*═══════════════════════════════════════
  バリデーションスキーマ定義 - Zod
═══════════════════════════════════════*/
  const registerSchema = z.object({
    name: z.string().min(1, "名前は必須です"),
    email: z.string().email("正しいメールアドレスを入力してください"),
    password: z.string().min(6, "6文字以上のパスワードを入力してください"),
  });

  /*═══════════════════════════════════════
  状態管理 - State Management
═══════════════════════════════════════*/
  const [state, formAction] = useFormState(registerUser, { error: null });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const formRef = useRef<HTMLFormElement>(null);

  /*═══════════════════════════════════════
  イベント処理 - Event Handlers
═══════════════════════════════════════*/

  const validate = () => {
    const result = registerSchema.safeParse({ name, email, password });
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setFieldErrors({
        name: errors.name?.[0],
        email: errors.email?.[0],
        password: errors.password?.[0],
      });
      return false;
    }
    setFieldErrors({});
    return true;
  };

  /*═══════════════════════════════════════
  レンダリング - Rendering
═══════════════════════════════════════*/
  return (
    <Box className="flex min-h-screen w-full items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-xl">新規登録</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {state.error && <p className="text-sm text-red-500">{state.error}</p>}

          <form
            action={(formData) => {
              if (validate()) {
                formAction(formData);
              }
            }}
            className="space-y-4"
          >
            <Box className="space-y-1">
              <Input
                name="name"
                placeholder="お名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {fieldErrors.name && (
                <span className="text-xs text-red-500">{fieldErrors.name}</span>
              )}
            </Box>

            <Box className="space-y-1">
              <Input
                name="email"
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {fieldErrors.email && (
                <span className="text-xs text-red-500">
                  {fieldErrors.email}
                </span>
              )}
            </Box>

            <Box className="space-y-1">
              <Input
                name="password"
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {fieldErrors.password && (
                <span className="text-xs text-red-500">
                  {fieldErrors.password}
                </span>
              )}
            </Box>

            <Button type="submit" className="w-full">
              アカウントを作成
            </Button>
          </form>

          <Box className="text-center text-sm text-gray-500">または</Box>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Googleでログイン
          </Button>

          <Box className="text-center text-sm text-gray-500">
            すでにアカウントをお持ちの方は{" "}
            <Link
              href="/login"
              className="text-main font-medium hover:underline"
            >
              ログイン
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Box } from "@/src/components/ui/Box";
import { z } from "zod";

/** ログインページ　画面表示用　コンポーネント */
const LoginPage = () => {
  const router = useRouter();

  /*═══════════════════════════════════════
  バリデーションスキーマ定義 - Zod
═══════════════════════════════════════*/
  const loginSchema = z.object({
    email: z.string().email("正しいメールアドレスを入力してください"),
    password: z.string().min(6, "6文字以上のパスワードを入力してください"),
  });

  /*═══════════════════════════════════════
  状態管理 - State Management
═══════════════════════════════════════*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  /*═══════════════════════════════════════
  イベント処理 - Event Handlers
═══════════════════════════════════════*/
  const handleLogin = async () => {
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const fieldErrorMap = result.error.flatten().fieldErrors;
      setFieldErrors({
        email: fieldErrorMap.email?.[0],
        password: fieldErrorMap.password?.[0],
      });
      return;
    }
    setFieldErrors({}); // エラークリア

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("ログインに失敗しました");
    }
  };

  /*═══════════════════════════════════════
  レンダリング - Rendering
═══════════════════════════════════════*/
  return (
    <Box className="flex min-h-screen w-full items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-xl">ログイン</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className="text-sm text-red-500">{error}</p>}

          {/* メールアドレス表示　領域 */}
          <Box className="space-y-1">
            <Input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {fieldErrors.email && (
              <span className="text-xs text-red-500">{fieldErrors.email}</span>
            )}
          </Box>

          {/* パスワード表示　領域 */}
          <Box className="space-y-1">
            <Input
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

          <Button className="w-full" onClick={handleLogin}>
            メールでログイン
          </Button>

          <Box className="text-center text-sm text-gray-500">または</Box>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Googleでログイン
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;

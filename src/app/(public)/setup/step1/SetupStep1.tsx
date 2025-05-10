"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Box } from "@/src/components/ui/Box";
import { saveDream } from "@/src/app/(public)/setup/actions";

import { z } from "zod";

type Props = {
  initialDream?: string | null;
};

/** セットアップメニュー　STEP1 画面表示用コンポーネント */
export default function SetupStep1({ initialDream }: Props) {
  const nextStep = "2";

  /*═══════════════════════════════════════
      バリデーションスキーマ定義 - Zod
    ═══════════════════════════════════════*/
  const dreamSchema = z.string().min(1, "夢は必須です");

  /*═══════════════════════════════════════
  状態管理 - State Management
═══════════════════════════════════════*/
  const [dream, setDream] = useState(initialDream || "");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  /*═══════════════════════════════════════
  イベント処理 - Event Handlers
═══════════════════════════════════════*/
  const handleNext = () => {
    // バリデーションチェック
    const result = dreamSchema.safeParse(dream);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setError(null);

    startTransition(async () => {
      await saveDream(dream, nextStep);
      router.push("/setup/step2");
    });
  };

  /*═══════════════════════════════════════
  レンダリング - Rendering
═══════════════════════════════════════*/
  return (
    <Box className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-12">
      <Box className="w-full max-w-xl">
        <p className="mb-2 text-sm text-gray-500">Setup 1/4</p>
        <h1 className="mb-4 text-2xl font-bold">夢の登録</h1>
        <p className="mb-6 text-gray-600">
          まずは、あなたが実現したい夢を登録しましょう。
        </p>

        <Input
          placeholder="例: 世界一周旅行"
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          className="mb-4"
        />
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <Button onClick={handleNext} disabled={!dream || isPending}>
          {isPending ? "保存中…" : "次へ進む"}
        </Button>
      </Box>
    </Box>
  );
}

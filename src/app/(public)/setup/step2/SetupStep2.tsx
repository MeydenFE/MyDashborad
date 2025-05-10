"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Box } from "@/src/components/ui/Box";
import { updateTargetDate } from "@/src/app/(public)/setup/actions";

type Props = {
  initialDate?: Date | null;
};

/** セットアップメニュー　STEP2 画面表示用コンポーネント */
export default function SetupStep2({ initialDate }: Props) {
  const nextStep = "3";
  /*═══════════════════════════════════════
  状態管理 - State Management
═══════════════════════════════════════*/
  const [targetDate, setTargetDate] = useState(
    initialDate ? initialDate.toISOString().split("T")[0] : "",
  );
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  /*═══════════════════════════════════════
  イベント処理 - Event Handlers
═══════════════════════════════════════*/
  const handleNext = () => {
    if (!targetDate) {
      setError("目標日は必須です");
      return;
    }
    setError(null);

    startTransition(async () => {
      await updateTargetDate(targetDate, nextStep);
      router.push("/setup/step3");
    });
  };

  const handleBack = () => {
    router.push("/setup/step1");
  };

  /*═══════════════════════════════════════
  レンダリング - Rendering
═══════════════════════════════════════*/
  return (
    <Box className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-12">
      <Box className="w-full max-w-xl">
        <p className="mb-2 text-sm text-gray-500">Setup 2/4</p>
        <h1 className="mb-4 text-2xl font-bold">目標日を設定</h1>
        <p className="mb-6 text-gray-600">
          いつまでにこの夢を実現したいか、目標日を入力してください。
        </p>

        <br />
        <span className="text-sm text-gray-500">
          ※目標日はあとから変更することもできます。
        </span>

        <Input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="mb-4"
        />
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <Box className="flex gap-4">
          <Button onClick={handleBack} disabled={isPending}>
            前へ戻る
          </Button>
          <Button onClick={handleNext} disabled={!targetDate || isPending}>
            {isPending ? "保存中…" : "次へ進む"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

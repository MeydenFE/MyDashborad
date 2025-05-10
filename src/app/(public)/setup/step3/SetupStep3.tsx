"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Box } from "@/src/components/ui/Box";
import { Textarea } from "@/src/components/ui/textarea";
import { updateMemo } from "@/src/app/(public)/setup/actions";

type Props = {
  title: string;
  initialMemo: string | null;
};

export default function SetupStep3({ title, initialMemo }: Props) {
  const nextStep = "4";
  const router = useRouter();

  /*═══════════════════════════════════════
    状態管理 - State Management
  ═══════════════════════════════════════*/
  const [memo, setMemo] = useState(initialMemo ?? "");
  const [isPending, startTransition] = useTransition();

  /*═══════════════════════════════════════
  イベント処理 - Event Handlers
═══════════════════════════════════════*/
  const handleNext = () => {
    startTransition(async () => {
      await updateMemo(memo, nextStep);
      router.push("/setup/step4");
    });
  };

  const handleBack = () => {
    router.push("/setup/step2");
  };

  /*═══════════════════════════════════════
  レンダリング - Rendering
═══════════════════════════════════════*/
  return (
    <Box className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-12">
      <Box className="w-full max-w-xl">
        <p className="mb-2 text-sm text-gray-500">Setup 3/4</p>
        <h1 className="mb-4 text-2xl font-bold">夢の詳細</h1>

        <p className="mb-6 text-gray-600">
          あなたが夢に込めた思いや、実現のために考えていることなどを自由に記入してください。
        </p>

        <p className="mb-6 rounded bg-gray-100 px-3 py-2 text-sm font-bold text-gray-700">
          {`あなたの設定した夢：${title}`}
        </p>

        <br />
        <p className="mb-2 text-sm text-gray-500">
          ※詳細はあとから入力・変更することもできます。
        </p>
        <Textarea
          placeholder="例: 学生時代からの憧れで、世界各地の文化に触れたいと思っている..."
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          className="mb-4 min-h-[120px]"
        />

        <Box className="flex gap-4">
          <Button onClick={handleBack} disabled={isPending}>
            前へ戻る
          </Button>
          <Button onClick={handleNext} disabled={isPending}>
            {isPending ? "保存中…" : "次へ進む"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

// SetupStep4.tsx
"use client";

import { useState, useTransition } from "react";
import { Box } from "@/src/components/ui/Box";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";

import { updateProjects } from "@/src/app/(public)/setup/actions";
import {
  Project,
  UnsplashImage,
} from "@/src/app/(public)/setup/types/setup.type";
import { ProjectCard } from "@/src/app/(public)/setup/step4/_components/ProjectCard";

import { z } from "zod";

// Props定義
interface Props {
  initialProjects: Project[];
  unsplashImages: UnsplashImage[];
}

/** セットアップページ 4/4表示用 コンポーネント */
export default function SetupStep4({ initialProjects, unsplashImages }: Props) {
  const nextStep = "complete";
  const router = useRouter();

  /*═══════════════════════════════════════
    状態管理 - State Management
  ═══════════════════════════════════════*/
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isPending, startTransition] = useTransition();
  const [fieldErrors, setFieldErrors] = useState<(string | null)[]>([]);
  const [generalError, setGeneralError] = useState<string | null>(null);

  /*═══════════════════════════════════════
      バリデーションスキーマ定義 - Zod
    ═══════════════════════════════════════*/
  const projectSchema = z.object({
    id: z.string(),
    title: z.string().min(1, "タイトルを入力してください"),
    imageUrl: z.string().optional().nullable(),
  });

  // プロジェクト全体（配列）のスキーマ
  const projectsSchema = z
    .array(projectSchema)
    .min(1, "最低でも1つ以上のプロジェクトを追加してください");

  /*═══════════════════════════════════════
  イベント処理 - Event Handlers
═══════════════════════════════════════*/

  /** プロジェクトを追加 */
  const handleAddProject = () => {
    setProjects([
      ...projects,
      { id: crypto.randomUUID(), title: "", imageUrl: "" },
    ]);
  };

  /** プロジェクト タイトル更新 */
  const handleUpdateProject = (index: number, value: string) => {
    const updated = [...projects];
    updated[index].title = value;
    setProjects(updated);
  };

  /** プロジェクト カバー画像更新 */
  const handleSelectImage = (index: number, url: string) => {
    const updated = [...projects];
    updated[index].imageUrl = url;
    setProjects(updated);
  };

  /** プロジェクト 削除ボタン */
  const handleDeleteProject = (index: number) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  /** 前へ戻るボタン */
  const handleBack = () => {
    router.push("/setup/step3");
  };

  /** 完了ボタン */
  const handleComplete = () => {
    // バリデーションチェック
    const result = projectsSchema.safeParse(projects);
    if (!result.success) {
      const flat = result.error.flatten();

      // プロジェクトの設定があるかチェック
      if (flat.formErrors.length > 0) {
        setGeneralError(flat.formErrors[0]);
      } else {
        // タイトルが未設定の場合の汎用メッセージ
        setGeneralError("未設定のタイトルがあります");
      }

      const errors: (string | null)[] = projects.map((_, i) => {
        const msg = flat.fieldErrors[i] as string[] | undefined;
        return msg?.[0] ?? null;
      });
      setFieldErrors(errors);
      return;
    }

    // 成功時はエラーをクリア
    setFieldErrors([]);
    setGeneralError(null);

    startTransition(async () => {
      await updateProjects(projects, nextStep);

      router.push("/dashboard");
    });
  };

  /*═══════════════════════════════════════
  レンダリング - Rendering
═══════════════════════════════════════*/
  return (
    <Box className="flex flex-col items-center justify-center px-4 py-12">
      <Box className="w-full max-w-2xl space-y-6">
        <p className="text-sm text-gray-500">Setup 4/4</p>
        <h1 className="text-2xl font-bold">プロジェクトを設定</h1>
        <p className="text-gray-600">
          夢を実現するためのプロジェクトを追加しましょう。
        </p>

        <p className="mt-2 text-sm text-gray-500">
          例：
          <span className="text-gray-600">
            世界一周旅行の場合 -
            語学の向上、貯金目標の達成、訪問国のリサーチなど
          </span>
        </p>

        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            onChange={(val) => handleUpdateProject(index, val)}
            onDelete={() => handleDeleteProject(index)}
            images={unsplashImages}
            selectedImage={project.imageUrl || undefined}
            onSelectImage={(url) => handleSelectImage(index, url)}
            errorMessage={fieldErrors[index]}
          />
        ))}

        {generalError && <p className="text-sm text-red-500">{generalError}</p>}

        <Box className="flex justify-end gap-4">
          <Button onClick={handleAddProject} variant="outline">
            + プロジェクトを追加
          </Button>
        </Box>

        <Box className="flex gap-4">
          <Button onClick={handleBack} disabled={isPending}>
            前へ戻る
          </Button>
          <Button onClick={handleComplete}>
            {isPending ? "保存中…" : "完了する"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

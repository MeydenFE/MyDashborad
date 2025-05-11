"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Box } from "@/src/components/ui/Box";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import UnsplashImageSelector, {
  UnsplashImage,
} from "@/src/app/(public)/setup/step4/_components/UnsplashImageSelector";

type Props = {
  /** プロジェクト名 */
  title: string;
  /** プロジェクト名変更ハンドラ */
  onChange: (val: string) => void;
  /** 削除ボタン押下時の処理 */
  onDelete: () => void;
  /** 画像一覧 */
  images: UnsplashImage[];
  /** 選択中の画像URL */
  selectedImage?: string;
  /** 画像選択時の処理 */
  onSelectImage: (url: string) => void;
  /** Zodのエラーメッセージ */
  errorMessage: string | null;
};

/** プロジェクト設定画面 表示用コンポーネント */
export const ProjectCard = ({
  title,
  onChange,
  onDelete,
  images,
  selectedImage,
  onSelectImage,
  errorMessage,
}: Props) => {
  const [isImageSelectorOpen, setIsImageSelectorOpen] = useState(false);

  return (
    <Card className="relative">
      {/* 削除ボタン */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onDelete}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
      >
        <X className="h-4 w-4" />
      </Button>

      <CardHeader>
        <CardTitle className="text-base">プロジェクト名</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* プロジェクト名入力欄 */}
        <Box className="space-y-1">
          <Input
            placeholder="プロジェクト名を入力してください"
            value={title}
            onChange={(e) => onChange(e.target.value)}
          />
          {errorMessage && (
            <p className="text-xs text-red-500">{errorMessage}</p>
          )}
        </Box>

        {/* カバー画像エリア */}
        {selectedImage ? (
          <>
            <Box className="mt-4 space-y-2">
              <Image
                src={selectedImage}
                alt="選択された画像"
                width={300}
                height={200}
                className="rounded border"
              />
              <Button
                variant="outline"
                onClick={() => setIsImageSelectorOpen(true)}
              >
                カバー画像を変更
              </Button>
            </Box>
          </>
        ) : (
          <Box className="mt-4 space-y-2">
            <p className="text-sm text-gray-500">
              カバー画像が選択されていません
            </p>
            <Button
              variant="outline"
              onClick={() => setIsImageSelectorOpen(true)}
            >
              Unsplashから画像を選択
            </Button>
          </Box>
        )}

        {/* Unsplash モーダル */}
        {isImageSelectorOpen && (
          <UnsplashImageSelector
            selected={selectedImage ?? null}
            images={images}
            onSelect={(url) => {
              onSelectImage(url);
              setIsImageSelectorOpen(false);
            }}
            onClose={() => setIsImageSelectorOpen(false)}
          />
        )}
      </CardContent>
    </Card>
  );
};

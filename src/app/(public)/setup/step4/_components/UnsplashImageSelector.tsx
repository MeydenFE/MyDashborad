"use client";

import { useEffect, useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Box } from "@/src/components/ui/Box";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

export type UnsplashImage = {
  id: string;
  url: string;
  alt: string;
};

type Props = {
  onSelect: (url: string) => void;
  onClose: () => void;
  selected: string | null;
  images: UnsplashImage[];
};

/** Unsplash画像選択用モーダル コンポーネント */
export default function UnsplashImageSelector({
  onSelect,
  onClose,
  selected,
  images: initialImages,
}: Props) {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<UnsplashImage[]>(initialImages);
  const [loading, setLoading] = useState(false);

  /** Unsplash画像 検索ボタン */
  const fetchImages = async (search: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/unsplash/search?query=${encodeURIComponent(search)}`,
      );
      if (!res.ok) throw new Error("Unsplash API fetch failed");
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      fetchImages(query);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-md bg-white p-6 shadow-lg">
        {/* 検索フォーム */}
        <Box className="mb-4 flex gap-2">
          <Input
            placeholder="画像を検索..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleSearch} disabled={loading}>
            検索
          </Button>
          <Button variant="ghost" onClick={onClose}>
            閉じる
          </Button>
        </Box>

        {/* 画像一覧 */}
        {loading ? (
          <p className="text-center text-gray-500">読み込み中...</p>
        ) : (
          <Box className="grid grid-cols-3 gap-3">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => onSelect(img.url)}
                className={`relative overflow-hidden rounded border-2 ${
                  selected === img.url
                    ? "border-main ring-main ring-2"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={300}
                  height={200}
                  className="object-cover"
                />
                {selected === img.url && (
                  <Box className="absolute inset-0 bg-black/20" />
                )}
              </button>
            ))}
          </Box>
        )}
      </div>
    </div>
  );
}

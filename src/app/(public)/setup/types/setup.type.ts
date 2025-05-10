/** セットアップページで使用する型定義ファイル */

// プロジェクト設定　型定義
export type Project = {
  id: string;
  title: string;
  imageUrl?: string | null;
};

// Unsplash画像　型定義
export type UnsplashImage = {
  id: string;
  url: string;
  alt: string;
};

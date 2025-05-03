import { Button } from "@/src/components/ui/button";
import Link from "next/link";

/** ランディングページ　メインビジュアル画面表示用　コンポーネント */
const LandingMainVisual = () => {
  return (
    <>
      <h2 className="mb-4 text-4xl font-bold">夢を、カタチに。</h2>
      <p className="mb-6 max-w-xl text-lg text-gray-600">
        <span className="text-main font-semibold">YumeLog</span>
        はあなたの夢・目標・行動を整理し、進捗を可視化するための個人専用ダッシュボードアプリです。
      </p>
      <Button size="lg" asChild>
        <Link href="/register">今すぐはじめる</Link>
      </Button>
    </>
  );
};

export default LandingMainVisual;

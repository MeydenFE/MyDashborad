import LandingMainVisual from "@/src/app/(public)/landing/_components/LandingMainVisual.component";
import LandingFeatures from "@/src/app/(public)/landing/_components/LandingFeatures.component";
import { Box } from "@/src/components/ui/Box";

/** ランディングページ TOP　画面表示 */
export default function LandingPage() {
  return (
    <Box className="flex min-h-screen flex-col bg-white">
      {/* メインビジュアル　表示領域 */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <LandingMainVisual />
      </section>
      {/* 機能説明　表示領域 */}
      <section className="grid grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-3">
        <LandingFeatures />
      </section>
    </Box>
  );
}

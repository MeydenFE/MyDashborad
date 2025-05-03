import PublicHeaderButton from "@/src/app/(public)/_components/header/PublicHeaderButton.component";
import HeaderLogo from "@/src/app/_components/sidebar/HeaderLogo";
import { Box } from "@/src/components/ui/Box";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";

/** ログイン前　ヘッダー画面表示用　コンポーネント */
const PublicHeader = async () => {
  /*═══════════════════════════════════════
  session情報を取得
═══════════════════════════════════════*/
  const session = await getServerSession(authOptions);
  return (
    <>
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <HeaderLogo />

        {/* ボタン表示 領域 */}
        <PublicHeaderButton session={session} />
      </header>

      {/* 仕切り線 */}
      <Box className="h-0.5 bg-[color:var(--color-main)]" />
    </>
  );
};

export default PublicHeader;

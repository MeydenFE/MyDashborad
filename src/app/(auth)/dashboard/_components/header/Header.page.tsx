import HeaderNavigationbar from "@/src/app/(auth)/dashboard/_components/header/components/HeaderNavigationbar.component";
import HeaderOpenSidebarButton from "@/src/app/(auth)/dashboard/_components/header/components/HeaderOpenSidebarButton.component";
import HeaderTitle from "@/src/app/(auth)/dashboard/_components/header/components/HeaderTitle.component";
import HeaderUserIcon from "@/src/app/(auth)/dashboard/_components/header/components/HeaderUserIcon.component.";
import { Box } from "@/src/components/ui/Box";

/** 共通ヘッダー部分 画面表示TOPコンポーネント */
const Header = () => {
  return (
    <>
      <header className="flex items-center bg-white px-4">
        {/*  OPEN ボタン 表示領域 */}
        <Box className="flex items-center">
          <HeaderOpenSidebarButton />
        </Box>

        <Box className="w-full max-w-[90rem] items-center px-4">
          <Box className="flex items-center justify-between">
            {/* タイトル表示領域 */}
            <Box className="mt-12 ml-4">
              <HeaderTitle />
            </Box>

            {/* ユーザーアイコン　表示領域 */}
            <HeaderUserIcon />
          </Box>

          {/* ナビゲーションバー　表示領域 */}
          <Box className="mt-10">
            <HeaderNavigationbar />
          </Box>
        </Box>
      </header>

      <Box className="h-0.5 bg-[color:var(--color-main)]" />
    </>
  );
};

export default Header;

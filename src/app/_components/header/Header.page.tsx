import HeaderNavigationbar from "@/src/app/_components/header/HeaderNavigationbar.component";
import HeaderOpenSidebarButton from "@/src/app/_components/header/HeaderOpenSidebarButton.component";
import HeaderTitle from "@/src/app/_components/header/HeaderTitle.component";
import HeaderUserIcon from "@/src/app/_components/header/HeaderUserIcon.component.";
import { Box } from "@/src/components/ui/Box";

/** 共通ヘッダー部分 画面表示TOPコンポーネント */
const Header = () => {
  return (
    <header className="flex items-center border-b bg-white px-4">
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
        <Box className="mt-12">
          <HeaderNavigationbar />
        </Box>
      </Box>
    </header>
  );
};

export default Header;

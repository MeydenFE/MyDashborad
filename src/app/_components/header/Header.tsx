import HeaderLogo from "@/src/app/_components/header/HeaderLogo";
import HeaderUserIcon from "@/src/app/_components/header/UserIcon";

/** 共通ヘッダー部分 */

const Header = () => {
  return (
    <header className="bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <div className="flex w-full items-center justify-between">
          <HeaderLogo />
          <HeaderUserIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;

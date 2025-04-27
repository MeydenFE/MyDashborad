import HeaderLogo from "@/src/components/header/Logo";
import UserIcon from "@/src/components/header/UserIcon";

const Header = () => {
  return (
    <header className="bg-white mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <div className="flex w-full items-center justify-between">
          <HeaderLogo />
          <UserIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;

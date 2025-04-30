"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/src/components/ui/sidebar";
import { PanelLeftOpen } from "lucide-react";

/** 共通ヘッダー部分 */

const Header = () => {
  const { open, setOpen } = useSidebar();

  return (
    <header className="flex h-16 items-center border-b px-4">
      {/*  サイドバーが閉じていたらボタンを表示 */}
      {!open && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
          className="mr-2"
        >
          <PanelLeftOpen className="h-5 w-5" />
        </Button>
      )}
      <h1 className="text-xl font-bold">My App</h1>
    </header>

    // <header className="mt-12 bg-white">
    //   {!isOpen && (
    //     <Button variant="ghost" onClick={toggle}>
    //       <Menu className="h-6 w-6" />
    //     </Button>
    //   )}
    //   {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
    //     <div className="flex w-full items-center justify-between">
    //       <HeaderLogo />
    //       <HeaderUserIcon />
    //     </div>
    //   </div> */}
    // </header>
  );
};

export default Header;

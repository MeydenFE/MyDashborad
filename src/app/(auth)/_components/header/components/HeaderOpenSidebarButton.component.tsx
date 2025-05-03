"use client";

import { Button } from "@/src/components/ui/button";
import { useSidebar } from "@/src/components/ui/sidebar";
import { PanelLeftOpen } from "lucide-react";

/** 共通ヘッダー部分 サイドバー表示用ボタン　コンポーネント */
const HeaderOpenSidebarButton = () => {
  console.log("navigation barです");
  const { open, setOpen } = useSidebar();

  return (
    <>
      {!open && (
        <Button variant="lightBlue" onClick={() => setOpen(true)}>
          <PanelLeftOpen className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default HeaderOpenSidebarButton;

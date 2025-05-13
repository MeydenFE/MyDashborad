"use client";
import { DropdownMenuCheckbox } from "@/src/components/common/DropdownMenuCheckbox";
import { Box } from "@/src/components/ui/Box";
import { Input } from "@/src/components/ui/input";
import { Search } from "lucide-react";
import { ReactEventHandler, ReactHTMLElement, useState } from "react";

/** プロジェクトページ　検索バー　表示用コンポーネント */
const ProjectSearchBar = () => {
  /*═══════════════════════════════════════
  状態管理 - State Management
═══════════════════════════════════════*/
  // 検索バー　入力文字
  const [input, setInput] = useState("");

  // 検索バー　イベント処理
  const handlerChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <Box className="w-full">
      <Box className="relative flex gap-2">
        {/* 検索バー　表示領域 */}
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          type="text"
          placeholder="Search"
          className="focus-visible:ring-main pl-10 focus-visible:ring-2"
          onChange={handlerChangeEvent}
          value={input}
        />

        {/* ステータスフィルター　表示領域 */}
        <DropdownMenuCheckbox targets={["ALL"]} buttonText="Status" />
      </Box>
    </Box>
  );
};

export default ProjectSearchBar;

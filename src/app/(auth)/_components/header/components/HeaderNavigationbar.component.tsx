"use client";

import TabSection from "@/src/components/common/TabSection";
import { tabsItems } from "@/src/app/(auth)/_components/header/params/Header.params";
import { usePathname } from "next/navigation";

/** 共通ヘッダー部分 ナビゲーションバー表示用　コンポーネント */
const HeaderNavigationbar = () => {
  // 現在のURLから動的にタブ選択状態を切り替え
  const pathName = usePathname();

  const defaultValue =
    tabsItems.find((item) => pathName.startsWith(item.href))?.value || "A";

  return (
    <>
      <TabSection tabsItems={tabsItems} defaultValue={defaultValue} />
    </>
  );
};

export default HeaderNavigationbar;

import TabSection from "@/src/components/common/TabSection";
import {
  tabsItems,
  defaultValue,
} from "@/src/app/(auth)/_components/header/params/Header.params";

/** 共通ヘッダー部分 ナビゲーションバー表示用　コンポーネント */
const HeaderNavigationbar = () => {
  return (
    <>
      <TabSection tabsItems={tabsItems} defaultValue={defaultValue} />
    </>
  );
};

export default HeaderNavigationbar;

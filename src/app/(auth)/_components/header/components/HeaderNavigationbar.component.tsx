import TabSection from "@/src/components/common/TabSection";
import { Calendar, Folder, Home, Ticket } from "lucide-react";

/** 共通ヘッダー部分 ナビゲーションバー表示用　コンポーネント */
const HeaderNavigationbar = () => {
  const tabsItems = [
    {
      value: "A",
      content: "Top",
      icon: <Home className="h-4 w-4" />,
    },
    {
      value: "B",
      content: "Project",
      icon: <Folder className="h-4 w-4" />,
    },
    {
      value: "C",
      content: "Ticket",
      icon: <Ticket className="h-4 w-4" />,
    },
    {
      value: "D",
      content: "Calendar",
      icon: <Calendar className="h-4 w-4" />,
    },
  ];

  const defaultValue = "A";

  return (
    <>
      <TabSection tabsItems={tabsItems} defaultValue={defaultValue} />
    </>
  );
};

export default HeaderNavigationbar;

import { TabsItem } from "@/src/app/(auth)/_components/header/types/Header.type";
import { Calendar, Folder, Home, Ticket } from "lucide-react";

/** 共通ヘッダーで使用する静的ファイル */
export const tabsItems: TabsItem[] = [
  {
    value: "A",
    content: "Top",
    icon: <Home className="h-4 w-4" />,
    href: "/dashboard",
  },
  {
    value: "B",
    content: "Project",
    icon: <Folder className="h-4 w-4" />,
    href: "/project",
  },
  {
    value: "C",
    content: "Ticket",
    icon: <Ticket className="h-4 w-4" />,
    // href: "/ticket",
    href: "/dashboard",
  },
  {
    value: "D",
    content: "Calendar",
    icon: <Calendar className="h-4 w-4" />,
    // href: "/calendar",
    href: "/dashboard",
  },
];

export const defaultValue = () => {};

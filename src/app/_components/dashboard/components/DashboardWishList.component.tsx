"use client";

import { Section } from "@/src/components/common/Section";
import { Box } from "@/src/components/ui/Box";
import { Checkbox } from "@/src/components/ui/checkbox";
import { useState } from "react";

/** 今日のチケット 画面表示用 コンポーネント */
const DashboardWishList = () => {
  // TODO: 完了状態の定義を持たせておく。 終了チケットの判定
  const items = [
    { id: 1, label: "Finish ticket #123", project: "Alpha" },
    { id: 2, label: "Review PRs from team", project: "Beta" },
    { id: 3, label: "Study English for 30 mins", project: "Self Growth" },
    { id: 4, label: "Write meeting summary", project: "Alpha" },
    { id: 5, label: "Design login screen mockup", project: "UI/UX" },
    { id: 6, label: "Fix bug in auth flow", project: "Beta" },
    { id: 7, label: "Prepare presentation slides", project: "Management" },
    { id: 8, label: "Check accessibility report", project: "QA" },
    { id: 9, label: "Update README and docs", project: "DevOps" },
    { id: 10, label: "Research performance tuning", project: "Backend" },
  ];

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <Section
      title="進行中のチケット"
      titleSx="text-gray-800"
      bgColor="bg-blue-50"
    >
      <ul className="max-h-64 space-y-2 overflow-y-auto pr-3 pl-2">
        {items.map((item) => {
          const isChecked = checkedItems.includes(item.id);
          return (
            <li
              key={item.id}
              className="flex items-start justify-start gap-4 py-2"
            >
              <Box className="flex flex-1 items-center space-x-3">
                <label
                  htmlFor={`item-${item.id}`}
                  className="flex cursor-pointer items-center space-x-3"
                >
                  <Checkbox
                    id={`item-${item.id}`}
                    checked={isChecked}
                    onCheckedChange={() => toggleCheck(item.id)}
                  />
                  <span
                    className={`text-sm ${
                      isChecked ? "text-gray-400 line-through" : "text-blue-900"
                    }`}
                  >
                    {item.label}
                  </span>
                </label>
              </Box>
              {/* Projectタグを左寄せで明確に表示 */}
              <span className="text-main rounded bg-white px-3 py-1 text-xs whitespace-nowrap">
                {item.project}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default DashboardWishList;

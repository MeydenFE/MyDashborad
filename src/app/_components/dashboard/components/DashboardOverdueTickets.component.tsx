"use client";

import { useState } from "react";
import { Section } from "@/src/components/common/Section";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Box } from "@/src/components/ui/Box";

const overdueItems = [
  { id: 11, label: "Fix broken build on CI", project: "Alpha" },
  { id: 12, label: "Submit quarterly report", project: "Management" },
  { id: 13, label: "Respond to client feedback", project: "Support" },
];

/** 期限切れチケット 画面表示用 コンポーネント */
const DashboardOverdueTickets = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <Section title="Overdue Tickets" bgColor="bg-pink-50">
      <ul className="max-h-64 space-y-4 overflow-y-auto pr-3 pl-2">
        {overdueItems.map((item) => {
          const isChecked = checkedItems.includes(item.id);
          return (
            <li
              key={item.id}
              className="flex items-start justify-start gap-4 py-2"
            >
              <Box className="flex flex-1 items-center">
                <label
                  htmlFor={`overdue-${item.id}`}
                  className="flex cursor-pointer items-center space-x-3"
                >
                  <Checkbox
                    id={`overdue-${item.id}`}
                    checked={isChecked}
                    onCheckedChange={() => toggleCheck(item.id)}
                  />
                  <span
                    className={`text-sm ${
                      isChecked ? "text-gray-400 line-through" : "text-red-900"
                    }`}
                  >
                    {item.label}
                  </span>
                </label>
              </Box>
              <span className="rounded bg-white px-3 py-1 text-xs whitespace-nowrap text-red-700">
                {item.project}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default DashboardOverdueTickets;

"use client";

import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

type DropdownCheckboxProps = {
  /** ドロップダウンリスト */
  targets: string[];
  /** ボタン表示テキスト */
  buttonText: string;
  /** イベント処理 */
  onChange?: (selected: string[]) => void;
};

export function DropdownMenuCheckbox({
  targets,
  buttonText,
  onChange,
}: DropdownCheckboxProps) {
  const allOption = "All";

  const [checkedItems, setCheckedItems] = React.useState<string[]>([allOption]);

  const handleCheckedChange = (item: string) => {
    setCheckedItems((prev) => {
      if (item === allOption) {
        onChange?.([allOption]);
        return [allOption];
      } else {
        let newChecked = prev.includes(allOption)
          ? [item]
          : prev.includes(item)
            ? prev.filter((i) => i! == item)
            : [...prev, item];

        if (newChecked.length === 0) {
          newChecked = [allOption];
        }
        onChange?.(newChecked);
        return newChecked;
      }
    });
  };

  const isChecked = (item: string) => checkedItems.includes(item);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "text-main flex items-center gap-1 px-2 py-1 text-sm",
            "rounded-md border border-gray-400 bg-inherit",
            "hover:bg-sky-100",
            "hover:text-main",
            "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0",
          )}
        >
          {buttonText}
          <ChevronDown className="text-main h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* ALL */}
        <DropdownMenuCheckboxItem
          checked={isChecked(allOption)}
          onSelect={(e) => e.preventDefault()}
          onCheckedChange={() => handleCheckedChange(allOption)}
        >
          Status Bar
        </DropdownMenuCheckboxItem>

        {/* 設定された目標 */}
        {targets.map((target) => (
          <DropdownMenuCheckboxItem
            key={target}
            checked={isChecked(target)}
            onSelect={(e) => e.preventDefault()}
            onCheckedChange={() => handleCheckedChange(target)}
          >
            {target}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

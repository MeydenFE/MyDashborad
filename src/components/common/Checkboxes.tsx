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

type DropdownCheckboxProps = {
  targets: string[];
  onChange?: (selected: string[]) => void;
};

export function DropdownMenuCheckboxes({
  targets,
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
          variant="outline"
          className="text-main hover:text-main border-none shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          Select Target
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

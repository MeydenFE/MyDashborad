/** 夢の軌跡　積み上げグラフ表示用コンポーネント */

import { StackedBarGraph } from "@/src/components/common/StackedBarGraph";
import TabSection from "@/src/components/common/TabSection";
import { Box } from "@/src/components/ui/Box";
import { tabsItems } from "@/src/app/_components/dream_journey/params/TabItems";
import { DropdownMenuCheckboxes } from "@/src/components/common/Checkboxes";

const DreamJourneyChart = () => {
  const data = [
    { name: "1月", A: 30, B: 20 },
    { name: "2月", A: 20, B: 25 },
    { name: "3月", A: 27, B: 23 },
  ];
  const keys = ["A", "B"];
  return (
    <Box className="flex gap-2">
      <Box className="flex flex-col gap-2">
        <Box>これまでに達成した目標数：14個</Box>
        <Box>設定した目標日：2025年5月27日</Box>
      </Box>
      <Box className="flex flex-col items-center gap-8">
        <Box className="flex gap-8">
          <DropdownMenuCheckboxes targets={["A", "B"]} />
          <TabSection tabsItems={tabsItems} />
        </Box>
        <StackedBarGraph data={data} keys={keys} />
      </Box>
    </Box>
  );
};

export default DreamJourneyChart;

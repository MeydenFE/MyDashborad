import { StackedBarGraph } from "@/src/components/common/StackedBarGraph";
import TabSection from "@/src/components/common/TabSection";
import { Box } from "@/src/components/ui/Box";
import { tabsItems } from "@/src/app/_components/dream_journey/params/TabItems";
import { DropdownMenuCheckboxes } from "@/src/components/common/Checkboxes";

/** 積み上げグラフ表示用コンポーネント */
const DreamJourneyChart = () => {
  // 　TODO: 積み上げグラフ表示用 DUMMY Data
  const data = [
    { name: "1月", A: 30, B: 20 },
    { name: "2月", A: 20, B: 25 },
    { name: "3月", A: 27, B: 23 },
  ];
  const keys = ["A", "B", "C"];
  return (
    <Box className="flex flex-col items-center gap-8">
      <Box className="flex items-center justify-start gap-8">
        <DropdownMenuCheckboxes targets={["A", "B"]} />
        <TabSection tabsItems={tabsItems} />
      </Box>
      {/* テーブル表示領域 */}
      <StackedBarGraph data={data} keys={keys} />
    </Box>
  );
};

export default DreamJourneyChart;

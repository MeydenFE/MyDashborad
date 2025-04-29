import { Box } from "@/src/components/ui/Box";
import { Section } from "@/src/components/common/Section";
import DreamJourneyChart from "@/src/app/_components/dream_journey/DreamJourneyChart.component";

/** 夢の軌跡　画面表示TOP コンポーネント */
const DreamJourney = () => {
  return (
    <Box className="mx-auto mt-8 max-w-7xl">
      <Section
        title="夢への軌跡"
        description="Your Dream Chronicle"
        titleSx="text-3xl"
        descriptionSx="pl-4"
        width="65%"
      >
        <Box>
          {/* 積み上げグラフ 領域 */}
          <DreamJourneyChart />
        </Box>
      </Section>
    </Box>
  );
};

export default DreamJourney;

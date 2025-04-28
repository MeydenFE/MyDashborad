import { Box } from "@/src/components/ui/Box";
import DreamJourneyChart from "@/src/app/_components/dream_journey/DreamJourneyChart";
import { Section } from "@/src/components/common/Section";

/** 夢の軌跡　コンポーネント */
const DreamJourney = () => {
  return (
    <Box className="mx-auto mt-8 max-w-7xl">
      <Section
        title="夢への軌跡"
        description="Your Dream Chronicle"
        titleSx="text-3xl"
        descriptionSx="pl-4"
      >
        <DreamJourneyChart />
      </Section>
    </Box>
  );
};

export default DreamJourney;

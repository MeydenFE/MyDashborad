import { SectionWithTabs } from "@/src/components/common/SectionWithTabs";
import { tabsItems } from "@/src/app/_components/dream_journey/params/TabItems";
import DreamJourneyTable from "@/src/app/_components/dream_journey/DreamJourney.table";
import { Box } from "@/src/components/ui/Box";

/** 夢の軌跡　コンポーネント */
const DreamJourney = () => {
  return (
    <Box className="mx-auto mt-8 max-w-7xl">
      <SectionWithTabs
        title="夢への軌跡"
        description="Your Dream Chronicle"
        titleSx="text-3xl"
        descriptionSx="pl-4"
        tabsItems={tabsItems}
      >
        <DreamJourneyTable />
      </SectionWithTabs>
    </Box>
  );
};

export default DreamJourney;

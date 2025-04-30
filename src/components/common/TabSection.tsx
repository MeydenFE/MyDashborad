import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

type TabSectionProps = {
  tabsItems: { value: string; content: string; icon?: React.ReactNode }[];
  defaultValue: string;
};

/** タブ切り替え　表示用コンポーネント */
const TabSection = ({ tabsItems, defaultValue }: TabSectionProps) => {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList className="flex gap-2 space-x-8 bg-white">
        {tabsItems.map((tabItem) => (
          <TabsTrigger
            key={tabItem.value}
            value={tabItem.value}
            className="relative border-0 bg-transparent px-4 py-2 text-black shadow-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 after:content-[''] hover:text-blue-500 hover:after:w-full focus-visible:ring-0 focus-visible:outline-none data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:after:w-full data-[state=active]:hover:text-blue-600"
          >
            {tabItem.icon && (
              <span className="inline-block">{tabItem.icon}</span>
            )}
            <span>{tabItem.content}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabSection;

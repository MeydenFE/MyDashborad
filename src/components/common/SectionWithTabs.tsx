import { Box } from "@/src/components/ui/Box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  titleSx?: string;
  descriptionSx?: string;
  width?: string;
  tabsItems: { value: string; content: string }[];
};

/** セクションごとにUIを作成する汎用コンポーネント (タブ付き) */
export const SectionWithTabs = ({
  title,
  description,
  children,
  titleSx,
  descriptionSx,
  width = "100%",
  tabsItems,
}: SectionProps) => {
  return (
    <Card style={{ width }}>
      <CardHeader>
        <Box className="flex items-center justify-start space-x-20">
          <CardTitle className={titleSx}>{title}</CardTitle>
          <Tabs defaultValue="all">
            <TabsList className="flex space-x-8 bg-white">
              {tabsItems.map((tabItem) => (
                <TabsTrigger
                  key={tabItem.value}
                  value={tabItem.value}
                  className="relative border-0 bg-transparent px-4 py-2 text-black shadow-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 after:content-[''] hover:text-blue-500 hover:after:w-full focus-visible:ring-0 focus-visible:outline-none data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:after:w-full data-[state=active]:hover:text-blue-600"
                >
                  {tabItem.content}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </Box>

        {description && (
          <CardDescription
            className={`text-main text-sm ${descriptionSx ?? ""}`}
          >
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
};

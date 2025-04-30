import { Box } from "@/src/components/ui/Box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  titleSx?: string;
  descriptionSx?: string;
  width?: string;
};

/** セクションごとにUIを作成する汎用コンポーネント (タブ付き) */
export const SectionWithTabs = ({
  title,
  description,
  children,
  titleSx,
  descriptionSx,
  width = "100%",
}: SectionProps) => {
  return (
    <Card style={{ width }}>
      <CardHeader>
        <Box className="flex items-center justify-start space-x-20">
          <CardTitle className={titleSx}>{title}</CardTitle>
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

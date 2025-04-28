import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

type SectionProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  titleSx?: string;
  width?: string;
};

/** セクションごとにUIを作成する汎用コンポーネント */
export const Section = ({
  title,
  description,
  children,
  titleSx,
  width = "100%",
}: SectionProps) => {
  return (
    <Card style={{ width }}>
      <CardHeader>
        {title && <CardTitle className={titleSx}>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

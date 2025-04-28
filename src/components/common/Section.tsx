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
  descriptionSx?: string;
  width?: string;
};

/** セクションごとにUIを作成する汎用コンポーネント */
export const Section = ({
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
        {title && <CardTitle className={titleSx}>{title}</CardTitle>}
        {description && (
          <CardDescription
            className={`text-sm text-main ${descriptionSx ?? ""}`}
          >
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
};

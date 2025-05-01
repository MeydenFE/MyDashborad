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
  bgColor?: string;
};

/** セクションごとにUIを作成する汎用コンポーネント */
export const Section = ({
  title,
  description,
  children,
  titleSx,
  descriptionSx,
  width = "100%",
  bgColor = "bg-white",
}: SectionProps) => {
  return (
    <Card style={{ width }} className={bgColor}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className={titleSx}>{title}</CardTitle>}
          {description && (
            <CardDescription
              className={`text-main text-sm ${descriptionSx ?? ""}`}
            >
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}

      <CardContent>{children}</CardContent>
    </Card>
  );
};

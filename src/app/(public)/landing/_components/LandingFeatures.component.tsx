import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import { landingFeatures } from "@/src/app/(public)/landing/params/LandingFeatures.params";

/** ランディングページ　機能説明画面表示用　コンポーネント */
const LandingFeatures = () => {
  return (
    <>
      {/* TODO: 画像等を差し込んでコンテンツを充実させたい */}
      {landingFeatures.map((item) => (
        <Card key={item.title}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            {item.desc}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default LandingFeatures;

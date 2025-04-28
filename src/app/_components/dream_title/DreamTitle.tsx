import { Section } from "@/src/components/common/Section";

/** 夢のタイトル　コンポーネント */
const DreamTitle = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <Section description="Towards the future you envision" width="100%">
        {/* TODO: Titleをserverから取得 */}
        <h1 className="text-4xl font-bold pl-6">外資系IT企業へ就職する！</h1>
      </Section>
    </div>
  );
};

export default DreamTitle;

import { Section } from "@/src/components/common/Section";

/** 夢のタイトル　コンポーネント */
const DreamTitle = () => {
  return (
    <div className="mx-auto mt-8 max-w-7xl">
      <Section description="Towards the future you envision" width="100%">
        {/* TODO: Titleをserverから取得 */}
        <h1 className="pl-6 text-4xl font-bold">
          アプリケーションを完成させる！
        </h1>
      </Section>
    </div>
  );
};

export default DreamTitle;

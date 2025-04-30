import { Section } from "@/src/components/common/Section";

/** Today's Wishlist 画面表示用 コンポーネント */
const DashboardWishList = () => {
  return (
    <Section title="Today's WishList">
      <ul className="list-disc space-y-2 pl-6">
        <li>Finish ticket #123</li>
        <li>Review PRs from team</li>
        <li>Study English for 30 mins</li>
      </ul>
    </Section>
  );
};

export default DashboardWishList;

import DashboardWishlist from "@/src/app/_components/dashboard/components/DashboardWishList.component";
import { Box } from "@/src/components/ui/Box";

/** ダッシュボード 画面表示TOPコンポーネント */
const Dashboard = () => {
  return (
    <Box className="flex-1 p-6">
      {/* Today's Wishlist　表示領域 */}
      {/* TODO: 一旦仮で50%指定 */}
      <Box className="w-1/2">
        <DashboardWishlist />
      </Box>
    </Box>
  );
};

export default Dashboard;

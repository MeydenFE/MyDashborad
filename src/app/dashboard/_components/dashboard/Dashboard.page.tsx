import DashboardOverdueTickets from "@/src/app/dashboard/_components/dashboard/components/DashboardOverdueTickets.component";
import DashboardProgressChart from "@/src/app/dashboard/_components/dashboard/components/DashboardProgressChart.component";
import DashboardProjectList from "@/src/app/dashboard/_components/dashboard/components/DashboardProjectList.component";
import DashboardWishlist from "@/src/app/dashboard/_components/dashboard/components/DashboardWishList.component";
import { Box } from "@/src/components/ui/Box";

/** ダッシュボード 画面表示TOPコンポーネント */
const Dashboard = () => {
  return (
    <Box className="flex-1 p-6">
      <Box className="flex flex-col md:flex-row">
        {/* 本日のチケット　表示領域 */}
        <Box className="my-4 w-full md:m-4 md:w-1/2 2xl:w-1/3">
          <DashboardWishlist />
        </Box>
        {/* 期限切れチケット　表示領域 */}
        <Box className="my-4 w-full md:m-4 md:w-1/2 2xl:w-1/3">
          <DashboardOverdueTickets />
        </Box>
      </Box>
      {/* 折れ線グラフ　表示領域 */}
      <Box className="my-4 w-full md:m-4 2xl:w-2/3">
        <DashboardProgressChart />
      </Box>
      {/* プロジェクトリスト　表示領域 */}
      <Box className="my-4 w-full md:m-4 2xl:w-2/3">
        <DashboardProjectList />
      </Box>
    </Box>
  );
};

export default Dashboard;

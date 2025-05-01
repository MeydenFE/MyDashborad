import DashboardOverdueTickets from "@/src/app/_components/dashboard/components/DashboardOverdueTickets.component";
import DashboardWishlist from "@/src/app/_components/dashboard/components/DashboardWishList.component";
import { Box } from "@/src/components/ui/Box";

/** ダッシュボード 画面表示TOPコンポーネント */
const Dashboard = () => {
  return (
    <Box className="flex-1 p-6">
      <Box className="flex flex-col md:flex-row">
        {/* Today's Tickets　表示領域 */}
        <Box className="m-4 w-full md:w-1/2 2xl:w-1/3">
          <DashboardWishlist />
        </Box>
        {/* Overdue Tickets　表示領域 */}
        <Box className="m-4 w-full md:w-1/2 2xl:w-1/3">
          <DashboardOverdueTickets />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

import ProjectActiveList from "@/src/app/(auth)/project/_components/project_active_list/ProjectActiveList.component";
import ProjectSearchBar from "@/src/app/(auth)/project/_components/project_search_bar/ProjectSearchBar.component";
import { Box } from "@/src/components/ui/Box";
import { authOptions } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";

/** ダッシュボード 画面表示TOPコンポーネント */
const Project = async () => {
  /*═══════════════════════════════════════
  Detabaseからユーザー情報を取得 - RSC
═══════════════════════════════════════*/
  const session = await getServerSession(authOptions);
  // ユーザー情報に紐づくプロジェクト一覧を取得
  const userWithProjects = await prisma.user.findUnique({
    where: { email: session?.user.email },
    select: {
      projects: {
        select: {
          id: true,
          title: true,
          startDate: true,
          endDate: true,
          status: true,
          imageUrl: true,
        },
      },
    },
  });

  const projects = userWithProjects?.projects || [];

  /** 入力された検索文字に応じてServer Actionで検索処理 */
  const handleSerch = async () => {};
  return (
    <Box className="flex-1 p-6">
      {/* プロジェクト検索欄　表示領域 */}
      <Box className="my-4 w-full md:m-4 md:w-1/2 2xl:w-1/3">
        <ProjectSearchBar />
      </Box>

      {/* アクティブプロジェクト一覧 表示領域*/}
      <Box className="my-4">
        <ProjectActiveList projects={projects} />
      </Box>
    </Box>
  );
};

export default Project;

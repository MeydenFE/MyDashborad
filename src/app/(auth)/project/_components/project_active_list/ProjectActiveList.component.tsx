import ProjectActiveListCard from "@/src/app/(auth)/project/_components/project_active_list/ProjectActiveListCard.component";
import { Box } from "@/src/components/ui/Box";

type Props = {
  projects: {
    title: string;
    id: string;
    startDate: Date | null;
    endDate: Date | null;
    status: string;
    imageUrl: string | null;
  }[];
};

const ProjectActiveList = ({ projects }: Props) => {
  return (
    <Box className="mt-12 w-full">
      <h1 className="text-xl font-bold">進行中のプロジェクト一覧</h1>

      {/* プロジェクトカード表示領域 */}
      <Box className="mt-4 grid grid-cols-1 gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectActiveListCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectActiveList;

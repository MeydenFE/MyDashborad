import { Section } from "@/src/components/common/Section";
import Image from "next/image";
import { format } from "date-fns";
import { Box } from "@/src/components/ui/Box";

type Props = {
  project: {
    title: string;
    id: string;
    startDate: Date | null;
    endDate: Date | null;
    status: string;
    imageUrl: string | null;
  };
};

const ProjectActiveListCard = ({ project }: Props) => {
  const formattedDate = project.startDate
    ? format(new Date(project.startDate), "yyyy年MM月dd日")
    : "未定";

  return (
    <Section>
      {/* タイトル */}
      <h2 className="mb-2 text-lg font-semibold">{project.title}</h2>

      {/* 画像 or 画像が未設定 */}
      <Box className="mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-md bg-gray-200">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} image`}
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm text-gray-600">画像が未設定です</span>
        )}
      </Box>

      {/* 開始日 & ステータス */}
      <Box className="flex items-center justify-between text-sm text-gray-700">
        <span>開始日：{formattedDate}</span>
        <span className="inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
          {project.status}
        </span>
      </Box>
    </Section>
  );
};

export default ProjectActiveListCard;

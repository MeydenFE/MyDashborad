import Project from "@/src/app/(auth)/project/_components/Project.page";
import { ensureAuthenticatedUser } from "@/src/lib/auth/sessionCheck";

/** Project画面　TOPページ　画面表示 */
const ProjectTopPage = async () => {
  // セッション情報チェック
  await ensureAuthenticatedUser();
  return (
    <main className="flex flex-1">
      <Project />
    </main>
  );
};

export default ProjectTopPage;

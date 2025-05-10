"use client";
import PublicHeaderUserIcon from "@/src/app/(public)/_components/header/PublicHeaderUserIcon.component";
import { Button } from "@/src/components/ui/button";
import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** ログイン前　ヘッダー画面　ボタンコンポーネント */
const PublicHeaderButton = ({ session }: { session: Session | null }) => {
  // ログインページの場合、LPページへの遷移ボタンに変更
  const pathName = usePathname();
  const isLoginPage =
    pathName === "/login" ||
    pathName === "/register" ||
    pathName.startsWith("/setup");

  if (session?.user) {
    return (
      <>
        <PublicHeaderUserIcon userImage={session.user.image} />
      </>
    );
  }

  return (
    <>
      {isLoginPage ? (
        <Button asChild variant="outline">
          <Link href="/landing">トップへ戻る</Link>
        </Button>
      ) : (
        <Button asChild variant="outline">
          <Link href="/login">ログイン</Link>
        </Button>
      )}
    </>
  );
};

export default PublicHeaderButton;

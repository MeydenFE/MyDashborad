"use client";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** ログイン前　ヘッダー画面　ボタンコンポーネント */
const PublicHeaderButton = () => {
  // ログインページの場合、LPページへの遷移ボタンに変更
  const pathName = usePathname();
  const isLoginPage = pathName === "/login" || pathName === "/register";

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

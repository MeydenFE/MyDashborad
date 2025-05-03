import { Box } from "@/src/components/ui/Box";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  userImage: string | null | undefined;
};

/** ログイン前　ヘッダー画面　ユーザーアイコン　コンポーネント */
const PublicHeaderUserIcon = ({ userImage }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Box className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={userImage || "/default-avatar.png"}
              alt="User Avatar"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </Box>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem asChild>
          <Link href="/settings">ユーザー設定</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/landing" })}>
          サインアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PublicHeaderUserIcon;

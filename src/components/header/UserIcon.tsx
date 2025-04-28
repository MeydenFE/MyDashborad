import userIconImage from "@/src/assets/images/default_user_icon.svg";
import Image from "next/image";

/** 共通ヘッダー ユーザーアイコン */

const UserIcon = () => {
  return (
    <>
      <Image
        src={userIconImage}
        alt="User Icon"
        width={70}
        height={70}
        className="rounded-full object-cover"
        priority
      />
    </>
  );
};

export default UserIcon;

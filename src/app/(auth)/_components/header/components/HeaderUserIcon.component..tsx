import Image from "next/image";
import DefaultUserIcon from "@/public/images/default_user_icon.svg";

/** 共通ヘッダー ユーザーアイコン */

const HeaderUserIcon = () => {
  return (
    <>
      <Image
        src={DefaultUserIcon}
        alt="User Icon"
        width={70}
        height={70}
        className="rounded-full object-contain"
      />
    </>
  );
};

export default HeaderUserIcon;

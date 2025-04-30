import Image from "next/image";

/** 共通ヘッダー ユーザーアイコン */

const HeaderUserIcon = () => {
  return (
    <>
      <Image
        src="/images/default_user_icon.svg"
        alt="User Icon"
        width={70}
        height={70}
        className="rounded-full object-contain"
        priority
      />
    </>
  );
};

export default HeaderUserIcon;

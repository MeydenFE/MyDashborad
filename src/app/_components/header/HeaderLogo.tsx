import Image from "next/image";
import YumeLogImage from "@/public/images/YumeLog.png";

/** 共通ヘッダー ロゴ部分 */

const HeaderLogo = () => {
  return (
    <div className="flex items-center bg-transparent">
      <div className="flex items-center justify-center bg-white">
        <Image
          src={YumeLogImage}
          alt="YumeLog"
          height={40}
          width={40}
          className="h-auto w-auto object-contain"
          priority
        />
      </div>
      <span className="text-main mt-6 text-xl font-bold">YumeLog</span>
    </div>
  );
};

export default HeaderLogo;

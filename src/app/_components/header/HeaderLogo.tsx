import Image from "next/image";
import YumeLogImage from "@/public/images/YumeLog.png";

/** 共通ヘッダー ロゴ部分 */

const HeaderLogo = () => {
  return (
    <div className="flex items-center bg-white p-2">
      <div className="flex items-center justify-center bg-white">
        <Image
          src={YumeLogImage}
          alt="YumeLog"
          height={50}
          width={50}
          className="object-contain h-auto w-auto"
          priority
        />
      </div>
      <span className="text-4xl mt-6 font-bold text-main">YumeLog</span>
    </div>
  );
};

export default HeaderLogo;

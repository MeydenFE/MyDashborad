import Image from "next/image";
import YumeLogImage from "@/public/images/YumeLog.png";
import { Box } from "@/src/components/ui/Box";

/** 共通ヘッダー ロゴ部分 */
const HeaderLogo = () => {
  return (
    <Box className="flex items-center bg-transparent">
      <Box className="flex items-center justify-center bg-white">
        <Image
          src={YumeLogImage}
          alt="YumeLog"
          height={40}
          width={40}
          className="h-auto w-auto object-contain"
          priority
        />
      </Box>
      <h1 className="text-main mt-6 text-2xl font-bold">YumeLog</h1>
    </Box>
  );
};

export default HeaderLogo;

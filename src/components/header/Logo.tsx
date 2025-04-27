import Image from "next/image";
import YumeLogImage from "@/src/assets/images/YumeLog(notTitle).jpg";

const HeaderLogo = () => {
  return (
    <div className="flex items-center bg-white p-2">
      <div className="flex items-center justify-center bg-white">
        <Image
          src={YumeLogImage}
          alt="YumeLog"
          height={100}
          width={100}
          className="object-contain"
          priority
        />
      </div>
      <span className="text-lg text-main">YumeLog</span>
    </div>
  );
};

export default HeaderLogo;

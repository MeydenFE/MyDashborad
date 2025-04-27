import userIconImage from "@/src/assets/images/default_user_icon.svg";
import Image from "next/image";

const UserIcon = () => {
  return (
    <>
      <Image
        src={userIconImage}
        alt="User Icon"
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
    </>
  );
};

export default UserIcon;

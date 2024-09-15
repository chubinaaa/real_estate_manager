import Image from "next/image";
import icon from "/public/svg/right_arrow_icon.svg";

export default function NextBtn() {
  return (
    <Image
      src={icon}
      alt="right arrow"
      width={64}
      height={64}
      className="w-[24px] h-[24px] | absolute top-1/2 -right-[65px] transform -translate-y-1/2"
    />
  );
}

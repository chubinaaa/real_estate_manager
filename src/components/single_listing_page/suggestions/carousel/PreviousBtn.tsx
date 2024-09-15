import Image from "next/image";
import icon from "/public/svg/left_arrow_icon.svg";

export default function PreviousBtn() {
  return (
    <Image
      src={icon}
      alt="left arrow"
      width={64}
      height={64}
      className="w-[24px] h-[24px] | absolute top-1/2 -left-[65px] transform -translate-y-1/2"
    />
  );
}

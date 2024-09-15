import Image from "next/image";
import Link from "next/link";
import icon from "/public/svg/left_arrow_icon.svg";

export default function BackBtn() {
  return (
    <Link href={"/"}>
      <Image
        src={icon}
        alt="left arrow"
        width={64}
        height={64}
        className="w-[22px] h-[22px]"
      />
    </Link>
  );
}

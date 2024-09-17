"use client";

import Image from "next/image";
import icon from "/public/svg/left_arrow_icon.svg";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  return (
    <Image
      src={icon}
      alt="left arrow"
      width={64}
      height={64}
      className="w-[22px] h-[22px] cursor-pointer"
      onClick={() => router.back()}
    />
  );
}

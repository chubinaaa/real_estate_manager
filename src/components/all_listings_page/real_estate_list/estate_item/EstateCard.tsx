import Location from "./details/Location";
import BedroomCount from "./details/BedroomCount";
import AreaCount from "./details/AreaCount";
import PostalCode from "./details/PostalCode";
import Price from "./details/Price";
import EstatePicture from "./details/EstatePicture";
import Link from "next/link";

export default function EstateCard() {
  return (
    <Link
      href={"/estate"}
      className="flex flex-col justify-center items-center select-none | rounded-[14px] | hover:shadow-custom"
    >
      <EstatePicture />
      <div className="w-full flex flex-col justify-center items-start | px-[25px] py-[22px] | bg-white | border-[1px] border-thirdGray rounded-[14px] border-t-0 rounded-t-none overflow-hidden">
        <Price />
        <Location />
        <div className="w-full flex justify-start items-center gap-8 pt-5">
          <BedroomCount />
          <AreaCount />
          <PostalCode />
        </div>
      </div>
    </Link>
  );
}

import Location from "./details/Location";
import BedroomCount from "./details/BedroomCount";
import AreaCount from "./details/AreaCount";
import PostalCode from "./details/PostalCode";
import Price from "./details/Price";
import EstatePicture from "./details/EstatePicture";
import Link from "next/link";

type Props = {
  data: EstateInList;
};

export default function EstateCard({ data }: Props) {
  return (
    <Link
      href={`/${data.id}`}
      className="flex flex-col justify-center items-center select-none | rounded-[14px] | hover:shadow-custom"
    >
      <EstatePicture source={data.image} />
      <div className="w-full flex flex-col justify-center items-start | px-[25px] py-[22px] | bg-white | border-[1px] border-thirdGray rounded-[14px] border-t-0 rounded-t-none overflow-hidden">
        <Price value={data.price} />
        <Location city={data.city.name} region={data.city.region.name} />
        <div className="w-full flex justify-start items-center gap-8 pt-5">
          <BedroomCount value={data.bedrooms} />
          <AreaCount value={data.area} />
          <PostalCode value={data.zip_code} />
        </div>
      </div>
    </Link>
  );
}

import Location from "./details/Location";
import BedroomCount from "./details/BedroomCount";
import AreaCount from "./details/AreaCount";
import PostalCode from "./details/PostalCode";
import Price from "./details/Price";
import EstatePicture from "./details/EstatePicture";
import Link from "next/link";

const data = {
  image: "",
  price: 80000,
  location: {
    region: "თბილისი",
    city: "ი. ჭავჭავაძის 53",
  },
  bedrooms: 1,
  area: 55,
  postal_code: "0160",
};

export default function EstateCard() {
  return (
    <Link
      href={"/estate"}
      className="flex flex-col justify-center items-center select-none | rounded-[14px] | hover:shadow-custom"
    >
      <EstatePicture source={data.image} />
      <div className="w-full flex flex-col justify-center items-start | px-[25px] py-[22px] | bg-white | border-[1px] border-thirdGray rounded-[14px] border-t-0 rounded-t-none overflow-hidden">
        <Price value={data.price} />
        <Location city={data.location.city} region={data.location.region} />
        <div className="w-full flex justify-start items-center gap-8 pt-5">
          <BedroomCount value={data.bedrooms} />
          <AreaCount value={data.area} />
          <PostalCode value={data.postal_code} />
        </div>
      </div>
    </Link>
  );
}

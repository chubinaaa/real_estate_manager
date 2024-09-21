import Area from "./Area";
import Location from "./Location";
import PostalCode from "./PostalCode";
import Price from "./Price";
import Rooms from "./Rooms";

type Props = {
  price: number;
  location: {
    address: string;
    city: string;
  };
  area: number;
  bedrooms: number;
  zip_code: string;
};

export default function EstateDetails({
  area,
  bedrooms,
  location,
  price,
  zip_code,
}: Props) {
  return (
    <div className="w-fit flex flex-col justify-center items-start gap-2">
      <Price value={price} />
      <Location value={location} />
      <Area value={area} />
      <Rooms value={bedrooms} />
      <PostalCode value={zip_code} />
    </div>
  );
}

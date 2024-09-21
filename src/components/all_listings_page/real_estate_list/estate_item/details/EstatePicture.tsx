import Image from "next/image";
import estate from "/public/jpg/estate_random_pic.jpg";
import IsRental from "./IsRental";

type Props = {
  source: string;
  is_rental: number;
};

export default function EstatePicture({ source, is_rental }: Props) {
  return (
    <div className="relative w-full | rounded-[10px] rounded-b-none overflow-hidden">
      <IsRental isRental={is_rental} />
      <Image
        src={source ? source : estate}
        alt="estate picture"
        width={800}
        height={400}
        className="h-[307px] object-cover"
      />
    </div>
  );
}

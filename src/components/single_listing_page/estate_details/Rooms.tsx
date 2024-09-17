import Image from "next/image";
import icon from "/public/svg/bed.svg";

type Props = {
  value: number;
};

export default function Rooms({ value }: Props) {
  return (
    <div className="flex justify-center items-center gap-2 | font-normal text-[20px] text-primaryGray">
      <Image src={icon} alt="postal code icon" width={20} height={20} />
      <p>საძინებელი {value}</p>
    </div>
  );
}

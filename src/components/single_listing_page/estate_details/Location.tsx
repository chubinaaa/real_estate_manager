import Image from "next/image";
import icon from "/public/svg/location.svg";

type Props = {
  value: {
    address: string;
    city: string;
  };
};

export default function Location({ value }: Props) {
  return (
    <div className="flex justify-center items-center gap-2 | font-normal text-[20px] text-primaryGray">
      <Image src={icon} alt="postal code icon" width={20} height={20} />
      <p>
        {value.city}, {value.address}
      </p>
    </div>
  );
}

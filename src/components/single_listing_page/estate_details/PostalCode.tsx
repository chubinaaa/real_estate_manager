import Image from "next/image";
import icon from "/public/svg/post_index_icon.svg";

type Props = {
  value: string;
};

export default function PostalCode({ value }: Props) {
  return (
    <div className="flex justify-center items-center gap-2 | font-normal text-[20px] text-primaryGray">
      <Image src={icon} alt="postal code icon" width={20} height={20} />
      <p>საფოსტო ინდექსი {value}</p>
    </div>
  );
}

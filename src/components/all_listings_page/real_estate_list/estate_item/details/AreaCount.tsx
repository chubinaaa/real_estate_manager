import Image from "next/image";
import icon from "../../../../../../public/svg/area_icon.svg";

type Props = {
  value: number;
};

export default function AreaCount({ value }: Props) {
  return (
    <div className="w-fit flex justify-center items-center gap-[5px] | text-fourthGray">
      <Image
        src={icon}
        alt="postal code icon"
        width={36}
        height={36}
        className="w-[18px] h-[18px]"
      />
      <p>
        {value} მ<sup>2</sup>
      </p>
    </div>
  );
}

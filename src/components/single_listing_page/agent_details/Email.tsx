import Image from "next/image";
import icon from "/public/svg/email_icon.svg";

type Props = {
  value: string;
};

export default function Email({ value }: Props) {
  return (
    <div className="flex justify-center items-center gap-[5px]">
      <Image
        src={icon}
        alt="email icon"
        width={64}
        height={64}
        className="w-4 h-4"
      />
      <h1 className="font-normal text-[14px] text-secondaryGray">{value}</h1>
    </div>
  );
}

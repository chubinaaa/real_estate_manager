import Image from "next/image";
import icon from "../../../../../../public/svg/area_icon.svg";

export default function AreaCount() {
  return (
    <div className="w-fit flex justify-center items-center gap-[5px] | text-fourthGray">
      <Image
        src={icon}
        alt="postal code icon"
        width={36}
        height={36}
        className="w-[18px] h-[18px]"
      />
      <p>55 მ2</p>
    </div>
  );
}

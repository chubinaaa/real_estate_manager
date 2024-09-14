import Image from "next/image";
import icon from "../../../../../../public/svg/location.svg";

export default function Location() {
  return (
    <div className="w-fit flex justify-center items-center gap-[7px] | text-fourthGray">
      <Image
        src={icon}
        alt="postal code icon"
        width={36}
        height={36}
        className="w-[18px] h-[18px]"
      />
      <p>თბილისი, ი. ჭავჭავაძის 53</p>
    </div>
  );
}

import Image from "next/image";
import icon from "../../../../../../public/svg/post_index_icon.svg";

export default function PostalCode() {
  return (
    <div className="w-fit flex justify-center items-center gap-[5px] | text-fourthGray">
      <Image
        src={icon}
        alt="postal code icon"
        width={36}
        height={36}
        className="w-[18px] h-[18px]"
      />
      <p>0160</p>
    </div>
  );
}

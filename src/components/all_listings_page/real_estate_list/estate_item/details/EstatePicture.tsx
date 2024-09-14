import Image from "next/image";
import estate from "/public/jpg/estate_random_pic.jpg";

export default function EstatePicture() {
  return (
    <div className="w-full | rounded-[10px] rounded-b-none overflow-hidden">
      <Image
        src={estate}
        alt="Estate dummy picture"
        width={384}
        height={307}
        className=""
      />
    </div>
  );
}

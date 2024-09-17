import Image from "next/image";
import estate from "/public/jpg/estate_random_pic.jpg";

type Props = {
  source: string;
};

export default function EstatePicture({ source }: Props) {
  return (
    <div className="w-full | rounded-[10px] rounded-b-none overflow-hidden">
      <Image
        src={source ? source : estate}
        alt="estate picture"
        width={384}
        height={307}
      />
    </div>
  );
}

import Image from "next/image";
import estate_image from "/public/jpg/second_estate.jpg";

type Props = {
  source: string;
};

export default function EstatePicture({ source }: Props) {
  return (
    <Image
      src={source ? source : estate_image}
      alt="estate picture"
      width={1024}
      height={800}
      className="w-full h-[670px] object-cover"
    />
  );
}

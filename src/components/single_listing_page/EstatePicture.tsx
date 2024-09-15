import Image from "next/image";
import estate_image from "/public/jpg/second_estate.jpg";

type Props = {
  value: string;
};

export default function EstatePicture({ value }: Props) {
  return (
    <div className="w-[110%] flex flex-col justify-center items-end gap-3 | rounded-[14px] rounded-b-none overflow-hidden">
      <Image
        src={value ? value : estate_image}
        alt="estate picture"
        width={526}
        height={346}
        className="w-full"
      />
      <h1 className="font-normal text-[16px] text-primaryGray">
        გამოქვეყნების თარიღი 08/08/24
      </h1>
    </div>
  );
}

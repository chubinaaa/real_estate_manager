import Image from "next/image";
import add_icon from "/public/svg/plus_icon.svg";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function FileInput({ label }: Props) {
  return (
    <>
      <input type="file" name="" id="" hidden />
      <div className="w-full flex flex-col justify-center items-start gap-[5px]">
        <label htmlFor={""} className="text-[14px] font-medium">
          {label} *
        </label>
        <div className="w-full h-[120px] | rounded-[8px] | border-[1px] border-dashed border-primaryBlack | flex justify-center items-center | cursor-pointer">
          <Image
            src={add_icon}
            alt="add icon"
            width={64}
            height={64}
            className="w-6 h-6"
          />
        </div>
      </div>
    </>
  );
}

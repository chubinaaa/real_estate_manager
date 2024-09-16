import Image from "next/image";
import done_icon from "/public/svg/done_icon.svg";

export default function TextareaInput() {
  return (
    <div className="w-full flex flex-col justify-center items-start">
      <label htmlFor="description" className="text-[14px] font-medium">
        აღწერა *
      </label>
      <textarea
        className="w-full p-[10px] | border-[1px] border-primaryGray | rounded-[6px] | text-[16px] font-normal | focus:outline-none resize-none"
        name=""
        id="description"
        rows={7}
      />
      <div className="flex justify-center items-center gap-[7px]">
        <Image
          src={done_icon}
          alt="done icon"
          width={64}
          height={64}
          className="w-3 h-3"
        />
        <p className="font-normal text-[14px]">მინიმუმ ხუთი სიტყვა</p>
      </div>
    </div>
  );
}

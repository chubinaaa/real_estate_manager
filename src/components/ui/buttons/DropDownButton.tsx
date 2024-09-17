"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  label: string;
  action: () => void;
  modalState: boolean;
};

export default function DropDownButton({ label, action, modalState }: Props) {
  return (
    <button
      type="button"
      className={`w-fit h-[35px] flex justify-center items-center gap-1 | text-primaryBlack rounded-[6px] | px-[14px] ${
        modalState ? "bg-secondaryWhite" : "bg-white"
      }`}
      onClick={action}
    >
      <h1 className="font-medium">{label}</h1>
      {modalState ? <IoIosArrowDown size={14} /> : <IoIosArrowUp size={14} />}
    </button>
  );
}

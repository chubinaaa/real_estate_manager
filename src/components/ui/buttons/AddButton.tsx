"use client";

import { IoIosAdd } from "react-icons/io";

type Props = {
  text: string;
  variant: "filled" | "transparent";
  action: () => void;
};

export default function AddButton({ text, variant, action }: Props) {
  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-1 | ${
        variant === "filled"
          ? "text-white bg-primaryRed hover:bg-secondaryRed border-[1px] border-primaryRed hover:border-secondaryRed"
          : "text-primaryRed bg-white hover:bg-primaryRed hover:text-white | border-[1px] border-primaryRed"
      } | rounded-[10px] px-4 py-3 | font-medium select-none`}
      onClick={action}
    >
      <IoIosAdd size={22} />
      {text}
    </button>
  );
}

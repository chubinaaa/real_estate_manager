"use client";

import Image from "next/image";
import checked_icon from "/public/svg/checked.svg";
import { useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  checkness: boolean;
};

export default function CheckBoxInput({ label, checkness, ...props }: Props) {
  const [isChecked, setIsChecked] = useState(() => checkness);

  const handleChange = () => setIsChecked((prev) => !prev);

  return (
    <div
      className="flex justify-center items-center gap-2 select-none cursor-pointer"
      onClick={handleChange}
    >
      <input
        {...props}
        type="checkbox"
        className="hidden peer"
        onChange={handleChange}
        checked={isChecked}
      />
      <span className="w-5 h-5 border-[1px] border-thirdGray rounded-[2px] peer-checked:border-[#45A849] peer-checked:rounded-[3px] *:peer-checked:block">
        {isChecked && (
          <Image src={checked_icon} alt="checked" className="w-full h-full" />
        )}
      </span>
      <label htmlFor={props.id} className="font-normal cursor-pointer">
        {label}
      </label>
    </div>
  );
}

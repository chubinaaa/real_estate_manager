"use client";

import { useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Option({ ...props }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => setIsChecked((prev) => !prev);

  return (
    <>
      <input
        hidden
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <div
        className={`w-10 h-10 | rounded-[6px] border-[1px] ${
          isChecked ? "border-primaryGray" : "border"
        } | flex justify-center items-center | cursor-pointer`}
        onClick={handleChange}
      >
        <h1 className="text-[14px] font-normal text-primaryGray">
          {props.value}
        </h1>
      </div>
    </>
  );
}

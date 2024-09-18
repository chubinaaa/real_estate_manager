"use client";

import Image from "next/image";
import add_icon from "/public/svg/plus_icon.svg";
import { useRef, useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function FileInput({ label, ...props }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSelectedPicture, setShowSelectedPicture] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image") {
      return;
    }
    setShowSelectedPicture(URL.createObjectURL(file));
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleFileUpload}
        {...props}
      />
      <div className="w-full flex flex-col justify-center items-start gap-[5px]">
        <label htmlFor={props.id} className="text-[14px] font-medium">
          {label} *
        </label>
        <div
          className={`w-full h-[120px] | rounded-[8px] | border-[1px] border-dashed border-primaryBlack | flex justify-center items-center | ${
            !showSelectedPicture && "cursor-pointer"
          }`}
          onClick={() =>
            !showSelectedPicture && inputRef && inputRef.current?.click()
          }
        >
          {showSelectedPicture ? (
            <Image
              src={showSelectedPicture}
              alt="uploaded file"
              width={560}
              height={560}
              className="w-[92px] h-[82px] object-cover"
            />
          ) : (
            <Image
              src={add_icon}
              alt="add icon"
              width={64}
              height={64}
              className="w-6 h-6"
            />
          )}
        </div>
      </div>
    </>
  );
}

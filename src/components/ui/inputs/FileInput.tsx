"use client";

import Image from "next/image";
import add_icon from "/public/svg/plus_icon.svg";
import garbage_icon from "/public/svg/garbage.svg";
import { useEffect, useRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  state: [string, React.Dispatch<React.SetStateAction<string>>];
};

export default function FileInput({ label, state, ...props }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSelectedPicture, setShowSelectedPicture] = state;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image") {
      return;
    }
    setShowSelectedPicture(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (window && props.id) {
      const storedValue = localStorage.getItem(props.id);
      if (window && props.id && storedValue) {
        setShowSelectedPicture(storedValue);
        console.log(storedValue);
      }
    }
  }, []);

  useEffect(() => {
    if (window && props.id) {
      localStorage.setItem(props.id, showSelectedPicture);
    }
  }, [showSelectedPicture]);

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
            <div className="relative">
              <Image
                src={showSelectedPicture}
                alt="uploaded file"
                width={560}
                height={560}
                className="w-[92px] h-[82px] object-cover"
              />
              <Image
                src={garbage_icon}
                width={64}
                height={64}
                alt="garbage icon"
                className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 | w-6 h-6 | cursor-pointer"
                onClick={() => setShowSelectedPicture("")}
              />
            </div>
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

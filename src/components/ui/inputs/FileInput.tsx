"use client";

import Image from "next/image";
import add_icon from "/public/svg/plus_icon.svg";
import garbage_icon from "/public/svg/garbage.svg";
import { useEffect, useRef } from "react";
import { fileToBase64 } from "../../../utils/helpers";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  state: StringInputStateType;
};

export default function FileInput({ label, state, ...props }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSelectedPicture, setShowSelectedPicture] = state;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image" || file.size >= 1048576) {
      return;
    }

    const base64File = (await fileToBase64(file)) as string;
    // Remember in localstorage
    localStorage.setItem(props.id as string, base64File);
    // Show in that moment
    setShowSelectedPicture({
      value: URL.createObjectURL(file),
      validity: true,
    });
  };

  useEffect(() => {
    if (window && props.id) {
      const storedValue = localStorage.getItem(props.id);

      if (storedValue) {
        const byteString = atob(storedValue.split(",")[1]);
        const mimeString = storedValue
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];

        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });

        const retrievedFile = new File([blob], "retrievedFile", {
          type: mimeString,
        });

        // Insert into input programatically
        const inputEl = inputRef.current;
        const files = inputRef.current?.files;

        if (inputEl && files) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(retrievedFile);

          inputEl.files = dataTransfer.files;
        }

        // Show in that moment
        setShowSelectedPicture({
          value: URL.createObjectURL(retrievedFile),
          validity: true,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            !showSelectedPicture.value && "cursor-pointer"
          }`}
          onClick={() =>
            !showSelectedPicture.value && inputRef && inputRef.current?.click()
          }
        >
          {showSelectedPicture.value ? (
            <div className="relative">
              <Image
                src={showSelectedPicture.value}
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
                onClick={() => {
                  localStorage.removeItem(props.id as string);
                  if (inputRef.current) inputRef.current.value = "";
                  setShowSelectedPicture({ value: "", validity: false });
                }}
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

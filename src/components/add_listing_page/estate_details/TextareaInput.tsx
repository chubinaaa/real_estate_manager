import Image from "next/image";
import done_icon from "/public/svg/done_icon.svg";
import red_done_icon from "/public/svg/red_done_icon.svg";
import green_done_icon from "/public/svg/green_done_icon.svg";
import { useEffect } from "react";

type Props = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  state: [
    { value: string; validity: boolean },
    React.Dispatch<React.SetStateAction<{ value: string; validity: boolean }>>
  ];
};

export default function TextareaInput({ state, ...props }: Props) {
  const [input, setInput] = state;

  useEffect(() => {
    if (window && props.id) {
      const storedValue = localStorage.getItem(props.id);
      if (window && props.id && storedValue) {
        setInput((prev) => ({ ...prev, value: storedValue }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window && props.id) {
      localStorage.setItem(props.id, input.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.value]);

  return (
    <div className="w-full flex flex-col justify-center items-start">
      <label htmlFor="description" className="text-[14px] font-medium">
        აღწერა *
      </label>
      <textarea
        className="w-full p-[10px] | border-[1px] border-primaryGray | rounded-[6px] | text-[16px] font-normal | focus:outline-none resize-none"
        rows={7}
        value={input.value}
        onChange={(e) =>
          setInput((prev) => ({ ...prev, value: e.target.value }))
        }
        {...props}
      />
      <div className="flex justify-center items-center gap-[7px]">
        <Image
          src={
            input.value.trim().length !== 0
              ? input.validity
                ? green_done_icon
                : red_done_icon
              : done_icon
          }
          alt="done icon"
          width={64}
          height={64}
          className="w-4 h-4"
        />
        <p
          className={`font-normal text-[14px] ${
            input.value.trim().length !== 0
              ? input.validity
                ? "text-primaryGreen"
                : "text-primaryRed"
              : "text-primaryGray"
          }`}
        >
          მინიმუმ ხუთი სიტყვა
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import done_icon from "/public/svg/done_icon.svg";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  messageText: string;
  isRequired?: boolean;
  state: [
    { value: string; validity: boolean },
    React.Dispatch<React.SetStateAction<{ value: string; validity: boolean }>>
  ];
};

export default function TypingInput({
  label,
  messageText,
  isRequired,
  state,
  ...props
}: Props) {
  const [input, setInput] = state;

  return (
    <div className="w-full flex flex-col justify-center items-start gap-[5px]">
      <label htmlFor={props.id} className="text-[14px] font-medium">
        {label} {isRequired && "*"}
      </label>
      <input
        type="text"
        required={isRequired}
        className="w-full h-[42px] px-[10px] | border-[1px] border-primaryGray | rounded-[6px] | text-[16px] font-normal | focus:outline-none"
        value={input.value}
        onChange={(e) =>
          setInput((prev) => ({ ...prev, value: e.target.value }))
        }
        autoComplete="off"
        {...props}
      />
      <div className="flex justify-center items-center gap-[7px]">
        <Image
          src={done_icon}
          alt="done icon"
          width={64}
          height={64}
          className="w-3 h-3"
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
          {input.value.trim().length !== 0
            ? input.validity
              ? messageText
              : "შეიყვანეთ ვალიდური მონაცემები"
            : messageText}
        </p>
      </div>
    </div>
  );
}

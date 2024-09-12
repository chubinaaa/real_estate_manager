"use client";

type Props = {
  text: string;
  action: () => void;
};

export default function RedButton({ text, action }: Props) {
  return (
    <button
      type="button"
      className="text-white bg-primaryRed hover:bg-secondaryRed | rounded-[10px] | px-[14px] py-2 | font-medium select-none"
      onClick={action}
    >
      {text}
    </button>
  );
}

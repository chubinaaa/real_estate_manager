"use client";

type Props = {
  text: string;
  action?: () => void;
};

export default function GrayButton({ text, action }: Props) {
  return (
    <button
      type="button"
      className="h-[40px] text-primaryGray hover:text-white hover:bg-primaryGray border-[1px] border-primaryGray rounded-[10px] | px-[10px] | font-medium select-none"
      onClick={action}
    >
      {text}
    </button>
  );
}

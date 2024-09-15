"use client";

type Props = {
  text: string;
  action?: () => void;
};

export default function GrayButton({ text, action }: Props) {
  return (
    <button
      type="button"
      className="text-primaryGray hover:text-white hover:bg-primaryGray border-[1px] border-primaryGray rounded-[10px] | p-[10px] | font-medium select-none"
      onClick={action}
    >
      {text}
    </button>
  );
}

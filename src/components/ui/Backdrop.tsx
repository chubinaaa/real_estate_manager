"use client";

type Props = {
  onClick?: () => void;
};

export default function Backdrop({ onClick }: Props) {
  return (
    <div
      className="z-50 fixed top-0 left-0 | w-full h-screen | bg-black opacity-30"
      onClick={onClick}
    />
  );
}

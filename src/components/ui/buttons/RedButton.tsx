type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export default function RedButton({ text, ...props }: Props) {
  return (
    <button
      {...props}
      className="text-white bg-primaryRed hover:bg-secondaryRed | rounded-[10px] | px-[14px] py-2 | font-medium select-none"
    >
      {text}
    </button>
  );
}

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function PriceInput({ ...props }: Props) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (["Backspace", "Delete", "Space"].includes(event.key)) {
      return;
    }

    if (event.key === "a" && (event.ctrlKey || event.metaKey)) {
      return;
    }

    if (["c", "v"].includes(event.key) && (event.ctrlKey || event.metaKey)) {
      return;
    }

    if (!/^[0-9]+$/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className="relative select-none">
      <input
        type="text"
        className="w-full h-[42px] | font-normal text-[14px] | px-[10px] pr-6 | rounded-[6px] | border-[1px] border-primaryGray invalid:border-primaryRed | focus:outline-none"
        onKeyDown={handleKeyDown}
        {...props}
      />
      <h1 className="text-[12px] | absolute top-1/2 right-[10px] transform -translate-y-1/2">
        ₾
      </h1>
    </div>
  );
}

"use client";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

export default function RadioInput({ label, ...props }: Props) {
  return (
    <div className="w-fit flex items-center gap-[7px] select-none">
      <input
        name={props.name}
        type="radio"
        className="hidden peer"
        {...props}
      />
      <span className="w-4 h-4 border border-primaryBlack bg-transparent rounded-full flex items-center justify-center *:peer-checked:block">
        <span className="hidden w-[6px] h-[6px] rounded-full bg-primaryBlack" />
      </span>
      <label htmlFor={props.id} className="font-normal cursor-pointer">
        {label}
      </label>
    </div>
  );
}

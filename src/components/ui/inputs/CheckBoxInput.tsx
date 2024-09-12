import Image from "next/image";
import checked_icon from "/public/svg/checked.svg";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

export default function CheckBoxInput({ label, ...props }: Props) {
  return (
    <div className="w-fit flex justify-center items-center gap-2 select-none">
      <input {...props} type="checkbox" className="hidden peer" />
      <span className="w-5 h-5 border-[1px] border-thirdGray rounded-[2px] peer-checked:border-[#45A849] peer-checked:rounded-[3px] *:peer-checked:block">
        <Image
          src={checked_icon}
          alt="checked"
          className="hidden w-full h-full"
        />
      </span>
      <label htmlFor={props.id} className="font-normal cursor-pointer">
        {label}
      </label>
    </div>
  );
}

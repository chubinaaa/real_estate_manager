import Image from "next/image";
import icon from "/public/svg/right_arrow_icon.svg";

type Props = {
  action: () => void;
  disabled: boolean;
};

export default function NextBtn({ disabled, action }: Props) {
  return (
    <button disabled={disabled}>
      <Image
        src={icon}
        alt="right arrow"
        width={64}
        height={64}
        className="w-[24px] h-[24px] | absolute top-1/2 -right-[65px] transform -translate-y-1/2 cursor-pointer"
        onClick={action}
      />
    </button>
  );
}

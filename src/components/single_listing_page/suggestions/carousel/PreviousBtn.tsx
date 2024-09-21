import Image from "next/image";
import icon from "/public/svg/left_arrow_icon.svg";

type Props = {
  action: () => void;
  disabled: boolean;
};

export default function PreviousBtn({ action, disabled }: Props) {
  return (
    <button disabled={disabled}>
      <Image
        src={icon}
        alt="left arrow"
        width={64}
        height={64}
        className="w-[24px] h-[24px] | absolute top-1/2 -left-[65px] transform -translate-y-1/2 cursor-pointer"
        onClick={action}
      />
    </button>
  );
}

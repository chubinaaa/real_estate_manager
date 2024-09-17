import { IoIosClose } from "react-icons/io";

type Props = {
  onClick: () => void;
};

export default function XcloseBtn({ onClick }: Props) {
  return (
    <IoIosClose
      size={26}
      className="cursor-pointer text-secondaryBlack hover:text-primaryBlack"
      onClick={onClick}
    />
  );
}

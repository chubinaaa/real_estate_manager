import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BackBtn() {
  return (
    <Link href={"/"}>
      <IoIosArrowRoundBack size={32} />
    </Link>
  );
}

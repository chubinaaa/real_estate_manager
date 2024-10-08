import Image from "next/image";
import redberry_logo from "/public/svg/redberry_logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b-[1px] bg-white border-thirdGray">
      <div className="w-full max-w-customMax mx-auto py-[38px]">
        <Link href="/">
          <Image
            src={redberry_logo}
            alt="Redberry Logo"
            width={256}
            height={144}
            className="w-[150px] h-[24px]"
          />
        </Link>
      </div>
    </header>
  );
}

type Props = {
  name: string;
  onClick: () => void;
};

export default function Option({ name, onClick }: Props) {
  return (
    <div
      className="w-full h-[42px] px-[10px] | flex justify-start items-center | font-normal text-[14px] | border-t-[1px] border-primaryGray | cursor-pointer"
      onClick={onClick}
    >
      {name}
    </div>
  );
}

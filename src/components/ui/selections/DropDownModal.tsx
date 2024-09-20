type Props = {
  children: React.ReactNode;
};

export default function DropDownModal({ children }: Props) {
  return (
    <div className="absolute top-[67px] left-[0] | w-full flex flex-col justify-center items-start | bg-white border-[1px] border-t-0 border-primaryGray rounded-[6px] rounded-t-none">
      {children}
    </div>
  );
}

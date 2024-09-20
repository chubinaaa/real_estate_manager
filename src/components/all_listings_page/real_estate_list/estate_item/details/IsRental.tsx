type Props = {
  isRental: number;
};
export default function IsRental({ isRental }: Props) {
  return (
    <div className="absolute top-[23px] left-[23px] | w-[90px] h-[26px] px-[10px] | flex justify-center items-center | font-medium text-[12px] bg-fourthGray text-white rounded-full">
      {isRental > 0 ? "ქირავდება" : "იყიდება"}
    </div>
  );
}

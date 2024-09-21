type Props = {
  isRental: number;
};

export default function IsRental({ isRental }: Props) {
  return (
    <div className="absolute top-[41px] left-[41px] | w-[137px] h-[36px] px-[10px] | flex justify-center items-center | font-medium text-[20px] bg-fourthGray text-white rounded-full select-none">
      {isRental > 0 ? "ქირავდება" : "იყიდება"}
    </div>
  );
}

const minSuggests = [10000, 20000, 30000, 40000, 50000];
const maxSuggests = [100000, 120000, 140000, 160000, 180000];

type Props = {
  changeInputs: React.Dispatch<
    React.SetStateAction<{
      from: string;
      till: string;
    }>
  >;
};

export default function MinMaxSuggestions({ changeInputs }: Props) {
  return (
    <div className="w-full flex justify-start items-center gap-6">
      <div className="w-full">
        <h1 className="font-medium text-[14px]">მინ. ფასი</h1>
        {minSuggests.map((suggest, idx) => (
          <h1
            key={idx}
            className="font-normal text-[14px] cursor-pointer"
            onClick={() =>
              changeInputs((prev) => ({
                ...prev,
                from: suggest.toString(),
              }))
            }
          >
            {suggest.toLocaleString()} ₾
          </h1>
        ))}
      </div>
      <div className="w-full">
        <h1 className="font-medium text-[14px]">მაქს. ფასი</h1>
        {maxSuggests.map((suggest, idx) => (
          <h1
            key={idx}
            className="font-normal text-[14px] cursor-pointer"
            onClick={() =>
              changeInputs((prev) => ({
                ...prev,
                till: suggest.toString(),
              }))
            }
          >
            {suggest.toLocaleString()} ₾
          </h1>
        ))}
      </div>
    </div>
  );
}

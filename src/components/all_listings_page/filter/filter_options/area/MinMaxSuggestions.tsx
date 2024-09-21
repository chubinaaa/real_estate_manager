const minSuggestions = [25, 40, 50, 75, 90];
const maxSuggestions = [100, 130, 160, 190, 200];

type Props = {
  changeInputs: React.Dispatch<
    React.SetStateAction<{ from: string; till: string }>
  >;
};

export default function MinMaxSuggestions({ changeInputs }: Props) {
  return (
    <div className="w-full flex justify-start items-center gap-6">
      <div className="w-full">
        <h1 className="font-medium text-[14px]">
          მინ. მ<sup>2</sup>
        </h1>
        {minSuggestions.map((num, idx) => (
          <h1
            key={idx}
            className="font-normal text-[14px] cursor-pointer"
            onClick={() =>
              changeInputs((prev) => ({
                ...prev,
                from: num.toString(),
              }))
            }
          >
            {num} მ<sup>2</sup>
          </h1>
        ))}
      </div>
      <div className="w-full">
        <h1 className="font-medium text-[14px]">
          მაქს. მ<sup>2</sup>
        </h1>
        {maxSuggestions.map((num, idx) => (
          <h1
            key={idx}
            className="font-normal text-[14px] cursor-pointer"
            onClick={() =>
              changeInputs((prev) => ({
                ...prev,
                till: num.toString(),
              }))
            }
          >
            {num} მ<sup>2</sup>
          </h1>
        ))}
      </div>
    </div>
  );
}

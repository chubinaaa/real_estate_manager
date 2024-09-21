import PriceInput from "./PriceInput";

type Props = {
  valueState: [
    { from: string; till: string },
    React.Dispatch<React.SetStateAction<{ from: string; till: string }>>
  ];
  isInvalid: boolean;
};

export default function PriceInputs({ valueState, isInvalid }: Props) {
  const [priceRange, setPriceRange] = valueState;

  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="w-[325px] flex justify-center items-center gap-6">
        <PriceInput
          placeholder="დან"
          name="from"
          id="from"
          value={priceRange.from}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, from: e.target.value }))
          }
        />
        <PriceInput
          placeholder="მდე"
          name="till"
          id="till"
          value={priceRange.till}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, till: e.target.value }))
          }
        />
      </div>
      {isInvalid && (
        <h1 className="text-primaryRed font-normal text-[12px]">
          შეიყვანეთ ვალიდური მონაცემები
        </h1>
      )}
    </div>
  );
}

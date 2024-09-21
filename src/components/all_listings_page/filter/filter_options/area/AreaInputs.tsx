import AreaInput from "./AreaInput";

type Props = {
  valueState: [
    { from: string; till: string },
    React.Dispatch<React.SetStateAction<{ from: string; till: string }>>
  ];
  isInvalid: boolean;
};

export default function AreaInputs({ isInvalid, valueState }: Props) {
  const [areaRange, setAreaRange] = valueState;

  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="w-[325px] flex justify-center items-center gap-6">
        <AreaInput
          placeholder="დან"
          name="from"
          id="from"
          value={areaRange.from}
          onChange={(e) =>
            setAreaRange((prev) => ({ ...prev, from: e.target.value }))
          }
          autoComplete="off"
        />
        <AreaInput
          placeholder="მდე"
          name="till"
          id="till"
          value={areaRange.till}
          onChange={(e) => {
            setAreaRange((prev) => ({ ...prev, till: e.target.value }));
          }}
          autoComplete="off"
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

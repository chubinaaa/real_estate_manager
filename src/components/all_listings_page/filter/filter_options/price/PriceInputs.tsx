import PriceInput from "../../../../ui/inputs/PriceInput";

export default function PriceInputs() {
  const validity = false;

  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="w-[325px] flex justify-center items-center gap-6">
        <PriceInput placeholder="დან" name="from" id="from" />
        <PriceInput placeholder="მდე" name="till" id="till" />
      </div>
      {validity && (
        <h1 className="text-primaryRed font-normal text-[12px]">
          შეიყვანეთ ვალიდური მონაცემები
        </h1>
      )}
    </div>
  );
}

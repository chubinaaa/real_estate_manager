import AreaInput from "./AreaInput";

export default function AreaInputs() {
  const validity = false;

  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="w-[325px] flex justify-center items-center gap-6">
        <AreaInput placeholder="დან" name="from" id="from" />
        <AreaInput placeholder="მდე" name="till" id="till" />
      </div>
      {validity && (
        <h1 className="text-primaryRed font-normal text-[12px]">
          შეიყვანეთ ვალიდური მონაცემები
        </h1>
      )}
    </div>
  );
}

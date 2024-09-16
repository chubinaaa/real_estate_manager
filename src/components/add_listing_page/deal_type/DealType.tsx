import RadioInput from "../../ui/inputs/RadioInput";

export default function DealType() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      <h1 className="font-medium text-[16px]">გარიგების ტიპი</h1>
      <div className="flex justify-center items-center gap-20">
        <RadioInput
          label="იყიდება"
          id="for_sale"
          name="group"
          value="for_sale"
        />
        <RadioInput
          label="ქირავდება"
          id="for_rent"
          name="group"
          value="for_rent"
        />
      </div>
    </div>
  );
}

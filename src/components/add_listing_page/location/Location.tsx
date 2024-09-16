import TypingInput from "../../ui/inputs/TypingInput";
import SelectOptions from "../../ui/selections/SelectOptions";

export default function Location() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-5">
      <h1 className="font-medium text-[16px] mb-[2px]">მდებარეობა</h1>
      <div className="w-full flex justify-center items-center gap-5">
        <TypingInput
          label="მისამართი"
          messageText="მინიმუმ ორი სიმბოლო"
          id=""
          name="location"
          isRequired
        />
        <TypingInput
          label="საფოსტო ინდექსი"
          messageText="მხოლოდ რიცხვები"
          id=""
          name="location"
          isRequired
        />
      </div>
      <div className="w-full flex justify-center items-center gap-5">
        <SelectOptions
          labelText="რეგიონი"
          optionList={["შიდა ქართლი", "სამეგრელო", "იმერეთ", "კახეთი", "აჭარა"]}
        />
        <SelectOptions
          labelText="ქალაქი"
          optionList={["თბილისი", "სენაკი", "ჭიათურა", "სიღნაღი", "ბათუმი"]}
        />
      </div>
    </div>
  );
}

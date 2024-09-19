// import TypingInput from "../../ui/inputs/TypingInput";
import { getCitiesList, getRegionList } from "../../../utils/get_functions";
import Place from "./Place";

export default async function Location() {
  const regions = await getRegionList();
  const cities = await getCitiesList();

  return (
    <div className="w-full flex flex-col justify-center items-start gap-5">
      <h1 className="font-medium text-[16px] mb-[2px]">მდებარეობა</h1>
      {/* <div className="w-full flex justify-center items-center gap-5">
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
      </div> */}
      <Place cities={cities} regions={regions} />
    </div>
  );
}

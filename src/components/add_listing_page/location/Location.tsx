import { getCitiesList, getRegionList } from "../../../utils/get_functions";
import Inputs from "./Inputs";
import Selections from "./Selections";

export default async function Location() {
  const regions = await getRegionList();
  const cities = await getCitiesList();

  return (
    <div className="w-full flex flex-col justify-center items-start gap-5">
      <h1 className="font-medium text-[16px] mb-[2px]">მდებარეობა</h1>
      <Inputs />
      <Selections cities={cities} regions={regions} />
    </div>
  );
}

import { getAgentsList } from "../../../utils/get_functions";
import SelectTab from "./SelectTab";

export default async function Agent() {
  const agents = await getAgentsList();

  return (
    <div className="w-1/2 flex flex-col justify-center items-start gap-5">
      <h1 className="font-medium text-[16px] mb-[2px]">აგენტი</h1>
      {agents && <SelectTab data={agents} />}
    </div>
  );
}

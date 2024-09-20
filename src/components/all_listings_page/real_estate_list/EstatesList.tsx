import { getAllEstates } from "../../../utils/get_functions";
import EstateCard from "./estate_item/EstateCard";

export default async function EstatesList() {
  const data = await getAllEstates();

  if (!data) return;

  return (
    <div className="w-full grid grid-cols-4 gap-5">
      {data.map((estate) => (
        <EstateCard key={estate.id} data={estate} />
      ))}
    </div>
  );
}

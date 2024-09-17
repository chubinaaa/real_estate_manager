"use client";

import FilterTag from "../../ui/tags/FilterTag";

export default function ChosenFilters() {
  return (
    <div className="w-fit flex justify-center items-center gap-2">
      <FilterTag label="თბილისი" deleteAct={() => console.log("")} />
      <FilterTag label="55 მ2 - 90 მ2" deleteAct={() => console.log("")} />
      <FilterTag label="20000₾ - 1000000₾" deleteAct={() => console.log("")} />
      <FilterTag label="1" deleteAct={() => console.log("")} />
      <h1 className="ml-2 font-medium cursor-pointer">გასუფთავება</h1>
    </div>
  );
}

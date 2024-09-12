"use client";

import FilterTag from "../components/ui/tags/FilterTag";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center gap-10 p-10">
      <FilterTag
        label="თბილისი"
        deleteAct={() => console.log("deleting თბილისი")}
      />
      <FilterTag
        label="1000₾ - 150000₾"
        deleteAct={() => console.log("deleting ფასი")}
      />
      <FilterTag
        label="55 მ2 - 90 მ2"
        deleteAct={() => console.log("deleting ზომა")}
      />
    </div>
  );
}

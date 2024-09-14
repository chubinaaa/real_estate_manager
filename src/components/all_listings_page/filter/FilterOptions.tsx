"use client";

import DropDownButton from "../../ui/buttons/DropDownButton";

export default function FilterOptions() {
  return (
    <div className="w-fit h-[47px] flex justify-center items-center gap-6 px-[6px] border-[1px] border-thirdGray rounded-[10px]">
      <DropDownButton
        label="რეგიონი"
        action={() => console.log("")}
        modalState={false}
      />
      <DropDownButton
        label="საფასო კატეგორია"
        action={() => console.log("")}
        modalState={false}
      />
      <DropDownButton
        label="ფართობი"
        action={() => console.log("")}
        modalState={false}
      />
      <DropDownButton
        label="საძინებლების რაოდენობა"
        action={() => console.log("")}
        modalState={false}
      />
    </div>
  );
}

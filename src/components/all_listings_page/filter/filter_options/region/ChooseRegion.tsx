"use client";

import { useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";
import CheckBoxInput from "../../../../ui/inputs/CheckBoxInput";

export default function ChooseRegion() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    setIsOpen(false);

    console.log(data.getAll("region"));
  };

  return (
    <form onSubmit={handleSubmition} className="relative">
      <DropDownButton
        label="რეგიონი"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal label="რეგიონის მიხედვით">
          <div className="w-full grid grid-cols-3 justify-items-start gap-x-[50px] gap-y-4">
            <CheckBoxInput
              label="თბილისი"
              name="region"
              id="tbilisi"
              value="tbilisi"
            />
            <CheckBoxInput
              label="გურია"
              name="region"
              id="guria"
              value="guria"
            />
            <CheckBoxInput
              label="იმერეთი"
              name="region"
              id="imereti"
              value="imereti"
            />
            <CheckBoxInput
              label="სამეგრელო"
              name="region"
              id="samegrelo"
              value="samegrelo"
            />
            <CheckBoxInput
              label="კახეთი"
              name="region"
              id="kakheti"
              value="kakheti"
            />
            <CheckBoxInput
              label="ქართლი"
              name="region"
              id="kartli"
              value="kartli"
            />
            <CheckBoxInput
              label="აფხაზეთი"
              name="region"
              id="apkhazeti"
              value="apkhazeti"
            />
          </div>
        </FilterOptionsModal>
      )}
    </form>
  );
}

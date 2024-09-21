"use client";

import { useContext, useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";
import CheckBoxInput from "../../../../ui/inputs/CheckBoxInput";
import { FilterEstateListContext } from "../../../../../context/ctx";

type Props = {
  data: Array<Region> | null;
};

export default function ChooseRegion({ data }: Props) {
  const { filter } = useContext(FilterEstateListContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const data = new FormData(e.currentTarget);
    const region = data.getAll("region") as Array<string>;

    filter[1]((prev) => ({ ...prev, region }));

    localStorage.setItem("region", JSON.stringify(region));
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleFilterApply} className="relative">
      <DropDownButton
        label="რეგიონი"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal label="რეგიონის მიხედვით">
          {data ? (
            <div className="w-full grid grid-cols-3 justify-items-start gap-x-[50px] gap-y-4">
              {data.map((region) => (
                <CheckBoxInput
                  key={region.id}
                  label={region.name}
                  name="region"
                  id={region.id.toString()}
                  value={region.name}
                  checkness={filter[0].region.includes(region.name)}
                />
              ))}
            </div>
          ) : (
            <h1>რეგიონების მონაცემების მიღებისას დაფიქსირდა შეცდომა.</h1>
          )}
        </FilterOptionsModal>
      )}
    </form>
  );
}

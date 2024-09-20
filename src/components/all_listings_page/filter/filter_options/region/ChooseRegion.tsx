"use client";

import { useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";
import CheckBoxInput from "../../../../ui/inputs/CheckBoxInput";

type Props = {
  data: Array<Region> | null;
};

export default function ChooseRegion({ data }: Props) {
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
          {data ? (
            <div className="w-full grid grid-cols-3 justify-items-start gap-x-[50px] gap-y-4">
              {data.map((region) => (
                <CheckBoxInput
                  key={region.id}
                  label={region.name}
                  name="region"
                  id={region.id.toString()}
                  value={region.name}
                />
              ))}
            </div>
          ) : (
            <h1>Error while fetching regions. Try again.</h1>
          )}
        </FilterOptionsModal>
      )}
    </form>
  );
}

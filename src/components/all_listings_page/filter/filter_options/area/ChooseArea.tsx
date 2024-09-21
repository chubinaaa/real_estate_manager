"use client";

import { useContext, useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";
import AreaInputs from "./AreaInputs";
import MinMaxSuggestions from "./MinMaxSuggestions";
import { FilterEstateListContext } from "../../../../../context/ctx";

type Props = {
  listingMax: number;
};

export default function ChooseArea({ listingMax }: Props) {
  const { filter } = useContext(FilterEstateListContext);
  const [isOpen, setIsOpen] = useState(false);
  const [areaRange, setAreaRange] = useState({
    from: "",
    till: "",
  });

  const validity =
    areaRange.from.trim().length > 0 &&
    areaRange.till.trim().length > 0 &&
    Number(areaRange.from) >= Number(areaRange.till);

  const handleFilterApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const data = new FormData(e.currentTarget);
    const from = Number(data.get("from"));
    const till = data.get("till");

    filter[1]((prev) => ({
      ...prev,
      area: [from, till ? Number(till) : listingMax],
    }));

    setIsOpen(false);
  };

  return (
    <form onSubmit={handleFilterApply} className="relative">
      <DropDownButton
        label="ფართობი"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal
          label="ფართობის მიხედვით"
          disableBtn={
            validity ||
            (areaRange.from.trim().length === 0 &&
              areaRange.till.trim().length === 0)
          }
        >
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <AreaInputs
              isInvalid={validity}
              valueState={[areaRange, setAreaRange]}
            />
            <MinMaxSuggestions changeInputs={setAreaRange} />
          </div>
        </FilterOptionsModal>
      )}
    </form>
  );
}

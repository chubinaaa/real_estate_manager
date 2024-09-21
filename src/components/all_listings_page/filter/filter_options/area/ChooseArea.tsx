"use client";

import { useContext, useEffect, useState } from "react";
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

    const newValue = [from, till ? Number(till) : listingMax];

    filter[1]((prev) => ({ ...prev, area: newValue }));

    localStorage.setItem("area", JSON.stringify(newValue));
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedValue = localStorage.getItem("area");

      if (storedValue) {
        const updatedValue = JSON.parse(storedValue) as [number, number];

        updatedValue.length > 0 &&
          setAreaRange({
            from: updatedValue[0].toString(),
            till: updatedValue[1].toString(),
          });
      }
    }
  }, []);

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

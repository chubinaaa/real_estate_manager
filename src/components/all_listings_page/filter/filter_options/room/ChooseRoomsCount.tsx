"use client";

import { useContext, useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";
import Option from "./Option";
import { FilterEstateListContext } from "../../../../../context/ctx";

type Props = {
  data: Array<number>;
};

export default function ChooseRoomsCount({ data }: Props) {
  const { filter } = useContext(FilterEstateListContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const data = new FormData(e.currentTarget);
    const bedrooms = data
      .getAll("bedroom_count")
      .map((el) => Number(el)) as Array<number>;

    filter[1]((prev) => ({ ...prev, bedrooms }));

    localStorage.setItem("bedrooms", JSON.stringify(bedrooms));

    setIsOpen(false);
  };

  return (
    <form onSubmit={handleFilterApply} className="relative">
      <DropDownButton
        label="საძინებლების რაოდენობა"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal label="საძინებლების რაოდენობა">
          <div className="w-full grid grid-cols-4 gap-4">
            {data.map((count) => (
              <Option
                key={count}
                id={count.toString()}
                name="bedroom_count"
                value={count}
                checkness={filter[0].bedrooms.includes(count)}
              />
            ))}
          </div>
        </FilterOptionsModal>
      )}
    </form>
  );
}

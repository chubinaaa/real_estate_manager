"use client";

import { useContext, useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";
import PriceInputs from "./PriceInputs";
import { FilterEstateListContext } from "../../../../../context/ctx";
import MinMaxSuggestions from "./MinMaxSuggestions";

type Props = {
  listingMax: number;
};

export default function ChoosePrice({ listingMax }: Props) {
  const { filter } = useContext(FilterEstateListContext);
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({
    from: "",
    till: "",
  });

  const validity =
    priceRange.from.trim().length > 0 &&
    priceRange.till.trim().length > 0 &&
    Number(priceRange.from) >= Number(priceRange.till);

  const handleFilterApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const from = Number(data.get("from"));
    const till = data.get("till");
    const newValue = [from, till ? Number(till) : listingMax];

    filter[1]((prev) => ({ ...prev, price: newValue }));

    localStorage.setItem("price", JSON.stringify(newValue));
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleFilterApply} className="relative">
      <DropDownButton
        label="საფასო კატეგორია"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal
          label="ფასის მიხედვით"
          disableBtn={
            validity ||
            (priceRange.from.trim().length === 0 &&
              priceRange.till.trim().length === 0)
          }
        >
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <PriceInputs
              valueState={[priceRange, setPriceRange]}
              isInvalid={validity}
            />
            <MinMaxSuggestions changeInputs={setPriceRange} />
          </div>
        </FilterOptionsModal>
      )}
    </form>
  );
}

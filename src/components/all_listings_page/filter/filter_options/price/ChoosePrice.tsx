"use client";

import { useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";
import PriceInputs from "./PriceInputs";

export default function ChoosePrice() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    setIsOpen(false);
    console.log({
      from: data.get("from"),
      till: data.get("till"),
    });
  };

  return (
    <form onSubmit={handleSubmition} className="relative">
      <DropDownButton
        label="საფასო კატეგორია"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal label="ფასის მიხედვით">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <PriceInputs />
            <div className="w-full flex justify-start items-center gap-6">
              <div className="w-full">
                <h1 className="font-medium text-[14px]">მინ. ფასი</h1>
                <h1 className="font-normal text-[14px]">10,000 ₾</h1>
                <h1 className="font-normal text-[14px]">25,000 ₾</h1>
                <h1 className="font-normal text-[14px]">35,000 ₾</h1>
              </div>
              <div className="w-full">
                <h1 className="font-medium text-[14px]">მაქს. ფასი</h1>
                <h1 className="font-normal text-[14px]">20,000 ₾</h1>
                <h1 className="font-normal text-[14px]">30,000 ₾</h1>
                <h1 className="font-normal text-[14px]">40,000 ₾</h1>
              </div>
            </div>
          </div>
        </FilterOptionsModal>
      )}
    </form>
  );
}

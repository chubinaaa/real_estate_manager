"use client";

import { useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";

export default function ChoosePrice() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <DropDownButton
        label="საფასო კატეგორია"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal label="ფასის მიხედვით">
          <h1>
            testtesttesttesttesttesttesttesttesttesttsttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestv
          </h1>
        </FilterOptionsModal>
      )}
    </div>
  );
}

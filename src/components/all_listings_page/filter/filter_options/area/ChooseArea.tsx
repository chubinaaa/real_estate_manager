"use client";

import { useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";

export default function ChooseArea() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <DropDownButton
        label="ფართობი"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal label="ფართობის მიხედვით">
          <h1>
            testtesttesttesttesttesttesttesttesttesttsttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestv
          </h1>
        </FilterOptionsModal>
      )}
    </div>
  );
}

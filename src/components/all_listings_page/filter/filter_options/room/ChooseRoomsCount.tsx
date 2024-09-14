"use client";

import { useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";

export default function ChooseRoomsCount() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <DropDownButton
        label="საძინებლების რაოდენობა"
        action={() => setIsOpen((prev) => !prev)}
        modalState={isOpen}
      />
      {isOpen && (
        <FilterOptionsModal label="საძინებლების რაოდენობა">
          <h1>
            testtesttesttesttesttesttesttesttesttesttsttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestv
          </h1>
        </FilterOptionsModal>
      )}
    </div>
  );
}

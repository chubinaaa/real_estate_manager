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
          <div className="w-full grid grid-cols-4 gap-4">
            <div className="w-10 h-10 | rounded-[6px] border-[1px] border-primaryGray | flex justify-center items-center | cursor-pointer">
              <h1 className="text-[14px] font-normal text-primaryGray">1</h1>
            </div>
            <div className="w-10 h-10 | rounded-[6px] border-[1px] border-primaryGray | flex justify-center items-center | cursor-pointer">
              <h1 className="text-[14px] font-normal text-primaryGray">2</h1>
            </div>
            <div className="w-10 h-10 | rounded-[6px] border-[1px] border-primaryGray | flex justify-center items-center | cursor-pointer">
              <h1 className="text-[14px] font-normal text-primaryGray">3</h1>
            </div>
            <div className="w-10 h-10 | rounded-[6px] border-[1px] border-primaryGray | flex justify-center items-center | cursor-pointer">
              <h1 className="text-[14px] font-normal text-primaryGray">4</h1>
            </div>
            <div className="w-10 h-10 | rounded-[6px] border-[1px] border-primaryGray | flex justify-center items-center | cursor-pointer">
              <h1 className="text-[14px] font-normal text-primaryGray">5</h1>
            </div>
          </div>
        </FilterOptionsModal>
      )}
    </div>
  );
}

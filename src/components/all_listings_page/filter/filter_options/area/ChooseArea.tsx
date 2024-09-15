"use client";

import { useState } from "react";
import DropDownButton from "../../../../ui/buttons/DropDownButton";
import FilterOptionsModal from "../../../../ui/modals/FilterOptionsModal";
import AreaInputs from "./AreaInputs";

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
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <AreaInputs />
            <div className="w-full flex justify-start items-center gap-6">
              <div className="w-full">
                <h1 className="font-medium text-[14px]">
                  მინ. მ<sup>2</sup>
                </h1>
                <h1 className="font-normal text-[14px]">
                  20 მ<sup>2</sup>
                </h1>
                <h1 className="font-normal text-[14px]">
                  40 მ<sup>2</sup>
                </h1>
                <h1 className="font-normal text-[14px]">
                  60 მ<sup>2</sup>
                </h1>
              </div>
              <div className="w-full">
                <h1 className="font-medium text-[14px]">
                  მაქს. მ<sup>2</sup>
                </h1>
                <h1 className="font-normal text-[14px]">
                  30 მ<sup>2</sup>
                </h1>
                <h1 className="font-normal text-[14px]">
                  50 მ<sup>2</sup>
                </h1>
                <h1 className="font-normal text-[14px]">
                  70 მ<sup>2</sup>
                </h1>
              </div>
            </div>
          </div>
        </FilterOptionsModal>
      )}
    </div>
  );
}

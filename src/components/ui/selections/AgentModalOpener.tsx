"use client";

import Image from "next/image";
import plus_icon from "/public/svg/plus_icon.svg";
import { useState } from "react";
import AddAgentModal from "../../add_agent_modal/AddAgentModal";

export default function AgentModalOpener() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div
        className="w-full h-[42px] px-[10px] | flex justify-start items-center gap-[10px] | font-normal text-[14px] | border-t-[1px] border-primaryGray | cursor-pointer"
        onClick={handleModal}
      >
        <Image
          src={plus_icon}
          alt="plus icon"
          width={128}
          height={128}
          className="w-6 h-6"
        />
        <h1>დაამატე აგენტი</h1>
      </div>
      {isOpen && <AddAgentModal handleModal={handleModal} />}
    </>
  );
}

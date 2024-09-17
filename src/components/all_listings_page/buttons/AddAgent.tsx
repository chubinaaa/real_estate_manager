"use client";

import { useState } from "react";
import AddAgentModal from "../../add_agent_modal/AddAgentModal";
import AddButton from "../../ui/buttons/AddButton";

export default function AddAgent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <AddButton
        variant="transparent"
        text="აგენტის დამატება"
        action={handleModal}
      />
      {isOpen && <AddAgentModal handleModal={handleModal} />}
    </>
  );
}

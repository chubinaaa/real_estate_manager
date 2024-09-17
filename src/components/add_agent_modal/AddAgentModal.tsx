"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./modal/Modal";

type Props = {
  handleModal: () => void;
};

export default function AddAgentModal({ handleModal }: Props) {
  const [modalElement, setModalElement] = useState<null | Element>(null);

  useEffect(() => {
    setModalElement(document.getElementById("add-agent-modal"));
  }, []);

  return (
    <>
      {modalElement &&
        createPortal(<Modal modalHandler={handleModal} />, modalElement)}
    </>
  );
}

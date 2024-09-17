"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

type Props = {
  modalhandler: () => void;
};

export default function DeleteListingModal({ modalhandler }: Props) {
  const [modalElement, setModalElement] = useState<null | Element>(null);

  useEffect(() => {
    setModalElement(
      document.getElementById("delete-listing-confirmation-modal")
    );
  }, []);

  return (
    <>
      {modalElement &&
        createPortal(<Modal modalHandler={modalhandler} />, modalElement)}
    </>
  );
}

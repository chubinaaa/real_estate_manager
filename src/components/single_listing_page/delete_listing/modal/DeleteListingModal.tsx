"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

type Props = {
  modalhandler: () => void;
  id: number;
};

export default function DeleteListingModal({ modalhandler, id }: Props) {
  const [modalElement, setModalElement] = useState<null | Element>(null);

  useEffect(() => {
    setModalElement(
      document.getElementById("delete-listing-confirmation-modal")
    );
  }, []);

  return (
    <>
      {modalElement &&
        createPortal(
          <Modal modalHandler={modalhandler} estate_id={id} />,
          modalElement
        )}
    </>
  );
}

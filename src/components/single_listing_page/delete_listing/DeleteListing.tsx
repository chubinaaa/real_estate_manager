"use client";

import { useState } from "react";
import GrayButton from "../../ui/buttons/GrayButton";
import DeleteListingModal from "./modal/DeleteListingModal";

export default function DeleteListing() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <GrayButton text="ლისტინგის წაშლა" action={handleModal} />
      {isOpen && <DeleteListingModal modalhandler={handleModal} />}
    </>
  );
}

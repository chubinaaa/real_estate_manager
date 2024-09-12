"use client";

import { useState } from "react";
import DropDownButton from "../components/ui/buttons/DropDownButton";

export default function Home() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <div className="w-full flex justify-center items-center gap-10 p-10">
      <DropDownButton
        label="პირველი"
        action={() => setModal1((prev) => !prev)}
        modalState={modal1}
      />
      <DropDownButton
        label="მეორე"
        action={() => setModal2((prev) => !prev)}
        modalState={modal2}
      />
      <DropDownButton
        label="მესამე"
        action={() => setModal3((prev) => !prev)}
        modalState={modal3}
      />
    </div>
  );
}

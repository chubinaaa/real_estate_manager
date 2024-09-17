"use client";

import GrayButton from "../../../ui/buttons/GrayButton";
import RedButton from "../../../ui/buttons/RedButton";

type Props = {
  cancelAct: () => void;
  deleteAct: () => void;
};

export default function Buttons({ cancelAct, deleteAct }: Props) {
  return (
    <div className="flex justify-center items-center gap-[15px]">
      <GrayButton text="გაუქმება" action={cancelAct} />
      <RedButton text="დადასტურება" onClick={() => deleteAct()} />
    </div>
  );
}

import GrayButton from "../../ui/buttons/GrayButton";
import RedButton from "../../ui/buttons/RedButton";

type Props = {
  cancelAct: () => void;
};

export default function Buttons({ cancelAct }: Props) {
  return (
    <div className="w-full flex justify-end items-center gap-[15px]">
      <GrayButton text="გაუქმება" action={cancelAct} />
      <RedButton text="დაამატე აგენტი" type="submit" />
    </div>
  );
}

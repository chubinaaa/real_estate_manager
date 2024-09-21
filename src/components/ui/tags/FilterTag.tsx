import XcloseBtn from "../buttons/XcloseBtn";

type Props = {
  label: string;
  deleteAct: () => void;
};

export default function FilterTag({ label, deleteAct }: Props) {
  return (
    <div className="w-fit h-[29px] flex justify-center items-center gap-1 | border-[1px] border-thirdGray rounded-full px-[10px] | font-normal select-none text-nowrap">
      <h1>{label}</h1>
      <XcloseBtn onClick={deleteAct} />
    </div>
  );
}

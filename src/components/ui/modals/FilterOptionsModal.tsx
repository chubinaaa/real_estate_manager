import RedButton from "../buttons/RedButton";

type Props = {
  children: React.ReactNode;
  label: string;
  disableBtn?: boolean;
};

export default function FilterOptionsModal({
  children,
  label,
  disableBtn,
}: Props) {
  return (
    <div className="w-max | flex flex-col justify-center items-start | absolute top-[51px] left-0 z-50 | p-6 | bg-white shadow-custom | border-[1px] border-thirdGray rounded-[10px] select-none">
      <h1 className="font-medium text-[16px] mb-6 text-nowrap">{label}</h1>
      {children}
      <div className="w-full flex justify-end items-center mt-8">
        <RedButton text="არჩევა" type="submit" disabled={disableBtn} />
      </div>
    </div>
  );
}

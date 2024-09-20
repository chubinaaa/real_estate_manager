import { IoIosArrowDown } from "react-icons/io";

type Props = {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  selectedName: string;
};
export default function Select({ state, selectedName }: Props) {
  const handleModal = () => state[1]((prev) => !prev);

  return (
    <div
      className={`w-full h-[42px] px-[10px] | bg-white border-[1px] border-primaryGray rounded-[6px] ${
        state[0] ? "rounded-b-none" : "rounded-b-[6px]"
      } | font-normal text-[14px] | flex justify-between items-center | cursor-pointer`}
      onClick={handleModal}
    >
      <h1 className={`${selectedName === "" && "italic"}`}>
        {selectedName.trim().length > 0 ? selectedName : "აირჩიე"}
      </h1>
      <IoIosArrowDown size={16} />
    </div>
  );
}

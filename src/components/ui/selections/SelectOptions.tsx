type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  label: string;
  optionList: Array<string>;
  isRequired?: boolean;
};

export default function SelectOptions({ label, optionList, ...props }: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-[5px]">
      <label htmlFor="somevalue" className="text-[14px] font-medium">
        აირჩიე რეგიონი *
      </label>
      <select
        className="w-full h-[42px] px-[10px] | bg-white border-[1px] border-primaryGray rounded-[6px] | font-normal text-[14px]"
        name=""
        id="somevalue"
        {...props}
      >
        {optionList.map((opt) => (
          <option>{opt}</option>
        ))}
      </select>
    </div>
  );
}

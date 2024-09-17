type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  labelText: string;
  optionList: Array<string>;
  isRequired?: boolean;
};

export default function SelectOptions({
  labelText,
  optionList,
  ...props
}: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-[5px]">
      <label htmlFor="somevalue" className="text-[14px] font-medium">
        {labelText} *
      </label>
      <select
        className="w-full h-[42px] px-[10px] | bg-white border-[1px] border-primaryGray rounded-[6px] | font-normal text-[14px]"
        name=""
        id="somevalue"
        {...props}
      >
        {optionList.map((opt, idx) => (
          <option key={idx}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

"use client";

import { useState } from "react";
import Select from "./Select";
import DropDownModal from "./DropDownModal";
import Option from "./Option";

type OptionType = { id: number; name: string };

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  labelText: string;
  options: Array<OptionType>;
  state: [OptionType, React.Dispatch<React.SetStateAction<OptionType>>];
};

export default function SelectOptions({
  labelText,
  options,
  state,
  ...props
}: Props) {
  const modal = useState(false);
  const [selectedValue, setSelectedValue] = state;

  const handleSelection = (option: OptionType) => {
    setSelectedValue(option);

    // Close modal after selection
    modal[1](false);
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-start gap-[5px] | select-none">
      <label htmlFor={props.id} className="text-[14px] font-medium">
        {labelText}
      </label>
      <Select selectedName={selectedValue.name} state={modal} />
      {modal[0] && (
        <DropDownModal>
          {options.map((opt) => (
            <Option
              key={opt.id}
              name={opt.name}
              onClick={() => handleSelection(opt)}
            />
          ))}
        </DropDownModal>
      )}
    </div>
  );
}

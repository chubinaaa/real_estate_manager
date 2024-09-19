"use client";

import { useRef, useState } from "react";
import Select from "./Select";
import DropDownModal from "./DropDownModal";
import Option from "./Option";

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  labelText: string;
  options: Array<{ id: number; name: string }>;
  state: [number, React.Dispatch<React.SetStateAction<number>>];
};

export default function SelectOptions({
  labelText,
  options,
  state,
  ...props
}: Props) {
  const selectionRef = useRef<HTMLSelectElement>(null);
  const modal = useState(false);
  const [selectedId, setSelectedId] = state;

  const handleSelection = (option: number) => {
    setSelectedId(option);
    if (selectionRef.current) selectionRef.current.value = option.toString();

    if (props.id) localStorage.setItem(props.id, option.toString());

    modal[1](false);
  };

  return (
    <>
      <select
        hidden
        ref={selectionRef}
        value={selectedId}
        onChange={(e) => setSelectedId(Number(e.target.value))}
        {...props}
      >
        <option key={0} value={0}></option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
      <div className="relative w-full flex flex-col justify-center items-start gap-[5px] | select-none">
        <label htmlFor={props.id} className="text-[14px] font-medium">
          {labelText}
        </label>
        <Select
          selectedName={options.find((el) => el.id === selectedId)?.name || ""}
          state={modal}
        />
        {modal[0] && (
          <DropDownModal>
            {options.map((opt) => (
              <Option
                key={opt.id}
                name={opt.name}
                onClick={() => handleSelection(opt.id)}
              />
            ))}
          </DropDownModal>
        )}
      </div>
    </>
  );
}

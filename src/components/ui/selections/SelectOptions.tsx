"use client";

import { useRef, useState } from "react";
import Select from "./Select";
import DropDownModal from "./DropDownModal";
import Option from "./Option";
import AgentModalOpener from "./AgentModalOpener";

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  labelText: string;
  options: Array<{ id: number; name: string }>;
  state: NumberInputStateType;
  putAgentModalOpener?: boolean;
};

export default function SelectOptions({
  labelText,
  options,
  state,
  putAgentModalOpener,
  ...props
}: Props) {
  const selectionRef = useRef<HTMLSelectElement>(null);
  const modal = useState(false);
  const [selectedId, setSelectedId] = state;

  const handleSelection = (option: number) => {
    setSelectedId({ value: option, validity: true });
    if (selectionRef.current) selectionRef.current.value = option.toString();

    if (props.id) localStorage.setItem(props.id, option.toString());

    modal[1](false);
  };

  return (
    <>
      <select
        hidden
        ref={selectionRef}
        value={selectedId.value}
        onChange={(e) =>
          setSelectedId({ value: Number(e.target.value), validity: false })
        }
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
          selectedName={
            options.find((el) => el.id === selectedId.value)?.name || ""
          }
          state={modal}
        />
        {modal[0] && (
          <DropDownModal>
            {putAgentModalOpener && <AgentModalOpener />}
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

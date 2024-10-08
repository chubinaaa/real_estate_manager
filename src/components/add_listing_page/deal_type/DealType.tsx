"use client";

import { useContext, useEffect } from "react";
import RadioInput from "../../ui/inputs/RadioInput";
import { AddEstateContext } from "../../../context/ctx";

export default function DealType() {
  const { dealTypeState } = useContext(AddEstateContext).inputStates;

  useEffect(() => {
    const storedValue = localStorage.getItem("is_rental");
    if (storedValue === "0" || storedValue === "1") {
      dealTypeState[1]({ value: storedValue, validity: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    dealTypeState[1]({ value: newValue, validity: true });
    localStorage.setItem("is_rental", newValue);
  };

  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      <h1 className="font-medium text-[16px]">გარიგების ტიპი</h1>
      <div className="flex justify-center items-center gap-20">
        <RadioInput
          label="იყიდება"
          id="estate_upload_deal_type_0"
          name="is_rental"
          value="0"
          onChange={handleChange}
          checked={dealTypeState[0].value === "0"}
        />
        <RadioInput
          label="ქირავდება"
          id="estate_upload_deal_type_1"
          name="is_rental"
          value="1"
          onChange={handleChange}
          checked={dealTypeState[0].value === "1"}
        />
      </div>
    </div>
  );
}

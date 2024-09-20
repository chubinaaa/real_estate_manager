"use client";

import { useContext, useEffect } from "react";
import TypingInput from "../../ui/inputs/TypingInput";
import { AddEstateContext as ctx } from "../../../context/ctx";

export default function Inputs() {
  const { addressState, postalCodeState } = useContext(ctx).inputStates;
  const [address, setAddress] = addressState;
  const [postalCode, setPostalCode] = postalCodeState;

  // Validation
  useEffect(() => {
    const validate = (condition: boolean) => condition;

    const isAddressValid = validate(address.value.trim().length > 2);
    const isPostalCodeValid = validate(/^\d+$/.test(postalCode.value.trim()));

    setAddress((prev) => ({ ...prev, validity: isAddressValid }));
    setPostalCode((prev) => ({ ...prev, validity: isPostalCodeValid }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address.value, postalCode.value]);

  return (
    <div className="w-full flex justify-center items-center gap-5">
      <TypingInput
        label="მისამართი"
        messageText="მინიმუმ ორი სიმბოლო"
        id="estate_upload_address_input"
        name="address"
        isRequired
        state={[address, setAddress]}
      />
      <TypingInput
        label="საფოსტო ინდექსი"
        messageText="მხოლოდ რიცხვები"
        id="estate_upload_postal_code_input"
        name="zip_code"
        isRequired
        state={[postalCode, setPostalCode]}
        maxLength={4}
      />
    </div>
  );
}

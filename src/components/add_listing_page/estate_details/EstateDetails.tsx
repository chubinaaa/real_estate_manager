"use client";

import { useEffect, useState } from "react";
import FileInput from "../../ui/inputs/FileInput";
import TypingInput from "../../ui/inputs/TypingInput";
import TextareaInput from "./TextareaInput";

export default function EstateDetails() {
  const [price, setPrice] = useState({ value: "", validity: false });
  const [area, setArea] = useState({ value: "", validity: false });
  const [bedrooms, setBedrooms] = useState({ value: "", validity: false });
  const [desc, setDesc] = useState({ value: "", validity: false });
  const [picture, setPicture] = useState("");

  // Validation
  useEffect(() => {
    const validate = (condition: boolean) => condition;

    const isPriceValid = validate(
      /^(0|[1-9]\d*)(\.\d+)?$/.test(price.value.trim())
    );
    const isAreaValid = validate(
      /^(0|[1-9]\d*)(\.\d+)?$/.test(area.value.trim())
    );
    const isBedroomsValid = validate(/^\d+$/.test(bedrooms.value.trim()));
    const isDescValid = validate(desc.value.trim().split(/\s+/).length >= 5);

    setPrice((prev) => ({ ...prev, validity: isPriceValid }));
    setArea((prev) => ({ ...prev, validity: isAreaValid }));
    setBedrooms((prev) => ({ ...prev, validity: isBedroomsValid }));
    setDesc((prev) => ({ ...prev, validity: isDescValid }));

    // მთლიანი ფორმის გავალიდურება
    // const isFormValid = isPriceValid && isAreaValid && isBedroomsValid && isDescValid
    // enableSubmition(isFormValid);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price.value, area.value, bedrooms.value, desc.value]);

  return (
    <div className="w-full flex flex-col justify-center items-start gap-5">
      <h1 className="font-medium text-[16px] mb-[2px]">ბინის დეტალები</h1>
      <div className="w-full flex justify-center items-center gap-5">
        <TypingInput
          id="estate_upload_price"
          name="price"
          label="ფასი"
          messageText="მხოლოდ რიცხვები"
          state={[price, setPrice]}
          isRequired
        />
        <TypingInput
          id="estate_upload_area"
          name="area"
          label="ფართობი"
          messageText="მხოლოდ რიცხვები"
          state={[area, setArea]}
          isRequired
        />
      </div>
      <div className="w-1/2">
        <TypingInput
          id="estate_upload_bedrooms"
          name="bedrooms"
          label="საძინებლების რაოდენობა"
          messageText="მხოლოდ რიცხვები"
          state={[bedrooms, setBedrooms]}
          isRequired
        />
      </div>
      <TextareaInput
        id="estate_upload_desc"
        name="desc"
        state={[desc, setDesc]}
      />
      <FileInput
        id="estate_upload_image"
        name="image"
        label="ატვირთეთ ფოტო"
        state={[picture, setPicture]}
      />
    </div>
  );
}

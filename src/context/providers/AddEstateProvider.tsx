"use client";

import { useEffect, useState } from "react";
import { AddEstateContext } from "../ctx";

type Props = {
  children: React.ReactNode;
};

export default function AddEstateProvider({ children }: Props) {
  const [isFormValid, setIsFormValid] = useState(false);
  const addressState = useState({ value: "", validity: false });
  const postalCodeState = useState({ value: "", validity: false });
  const priceState = useState({ value: "", validity: false });
  const areaState = useState({ value: "", validity: false });
  const bedroomsState = useState({ value: "", validity: false });
  const descriptionState = useState({ value: "", validity: false });
  const pictureState = useState({ value: "", validity: false });
  const dealTypeState = useState({ value: "", validity: false });
  const cityState = useState({ value: 0, validity: false });
  const regionState = useState({ value: 0, validity: false });
  const agentState = useState({ value: 0, validity: false });

  useEffect(() => {
    if (
      addressState[0].validity &&
      postalCodeState[0].validity &&
      priceState[0].validity &&
      areaState[0].validity &&
      bedroomsState[0].validity &&
      descriptionState[0].validity &&
      pictureState[0].validity &&
      dealTypeState[0].validity &&
      cityState[0].validity &&
      regionState[0].validity &&
      agentState[0].validity
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    addressState[0].validity,
    postalCodeState[0].validity,
    priceState[0].validity,
    areaState[0].validity,
    bedroomsState[0].validity,
    descriptionState[0].validity,
    pictureState[0].validity,
    dealTypeState[0].validity,
    cityState[0].validity,
    regionState[0].validity,
    agentState[0].validity,
  ]);

  return (
    <AddEstateContext.Provider
      value={{
        isFormValid,
        setIsFormValid,
        inputStates: {
          addressState,
          areaState,
          bedroomsState,
          cityState,
          dealTypeState,
          descriptionState,
          pictureState,
          postalCodeState,
          priceState,
          regionState,
          agentState,
        },
      }}
    >
      {children}
    </AddEstateContext.Provider>
  );
}

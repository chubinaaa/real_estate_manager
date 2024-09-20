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

  const inputStates = {
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
  };

  useEffect(
    () => {
      const allValid = Object.values(inputStates).every(
        ([state]) => state.validity
      );
      setIsFormValid(allValid);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Object.values(inputStates).map(([state]) => state.validity)
  );

  return (
    <AddEstateContext.Provider
      value={{
        isFormValid,
        setIsFormValid,
        inputStates,
      }}
    >
      {children}
    </AddEstateContext.Provider>
  );
}

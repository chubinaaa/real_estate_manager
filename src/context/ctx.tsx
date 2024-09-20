import { createContext } from "react";

export const AddEstateContext = createContext<IAddEstateCtx>({
  isFormValid: false,
  setIsFormValid: () => {},
  inputStates: {
    addressState: [{ value: "", validity: false }, () => {}],
    postalCodeState: [{ value: "", validity: false }, () => {}],
    priceState: [{ value: "", validity: false }, () => {}],
    areaState: [{ value: "", validity: false }, () => {}],
    bedroomsState: [{ value: "", validity: false }, () => {}],
    descriptionState: [{ value: "", validity: false }, () => {}],
    pictureState: [{ value: "", validity: false }, () => {}],
    dealTypeState: [{ value: "", validity: false }, () => {}],
    cityState: [{ value: 0, validity: false }, () => {}],
    regionState: [{ value: 0, validity: false }, () => {}],
    agentState: [{ value: 0, validity: false }, () => {}],
  },
});

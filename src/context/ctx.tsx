import { createContext } from "react";

export const AddEstateContext = createContext<IAddEstateCtx>({
  disableBtn: false,
  setDisableBtn: () => {},
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

export const FilterEstateListContext = createContext<FilterEstateListCtxType>({
  filter: [
    {
      region: [],
      price: [],
      area: [],
      bedrooms: [],
    },
    () => {},
  ],
});

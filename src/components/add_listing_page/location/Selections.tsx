"use client";

import { useContext, useEffect } from "react";
import SelectOptions from "../../ui/selections/SelectOptions";
import { AddEstateContext } from "../../../context/ctx";

type Props = {
  regions: Array<Region> | null;
  cities: Array<City> | null;
};

export default function Selections({ cities, regions }: Props) {
  const { regionState, cityState } = useContext(AddEstateContext).inputStates;

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const savedRegion = Number(
        localStorage.getItem("estate_upload_region_selection")
      );
      const savedCity = Number(
        localStorage.getItem("estate_upload_city_selection")
      );
      savedRegion
        ? regionState[1]({ value: savedRegion, validity: true })
        : regionState[1]({ value: 0, validity: false });
      savedCity
        ? cityState[1]({ value: savedRegion, validity: true })
        : regionState[1]({ value: 0, validity: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    cityState[1]({ value: 0, validity: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regionState[0].value]);

  return (
    <div className="w-full grid grid-cols-2 gap-x-5">
      {regions && (
        <SelectOptions
          id="estate_upload_region_selection"
          name="region_id"
          labelText="რეგიონი"
          options={regions}
          state={regionState}
        />
      )}
      {cities && regionState[0].value !== 0 && (
        <SelectOptions
          id="estate_upload_city_selection"
          name="city_id"
          labelText="ქალაქი"
          options={cities
            .filter((city) => city.region_id === regionState[0].value)
            .map((city) => ({ id: city.id, name: city.name }))}
          state={cityState}
        />
      )}
    </div>
  );
}

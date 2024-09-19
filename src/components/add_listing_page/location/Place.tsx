"use client";

import { useEffect, useState } from "react";
import SelectOptions from "../../ui/selections/SelectOptions";

type Props = {
  regions: Array<Region> | null;
  cities: Array<City> | null;
};

export default function Place({ cities, regions }: Props) {
  const regionState = useState({ id: 0, name: "" });
  const cityState = useState({ id: 0, name: "" });

  useEffect(() => {
    cityState[1]({ id: 0, name: "" });
  }, [regionState[0].id]);

  return (
    <div className="w-full grid grid-cols-2 gap-x-5">
      {regions && (
        <SelectOptions
          labelText="რეგიონი"
          options={regions}
          state={regionState}
        />
      )}
      {cities && regionState[0].name.trim().length > 0 && (
        <SelectOptions
          labelText="ქალაქი"
          options={cities.filter(
            (city) => city.region_id === regionState[0].id
          )}
          state={cityState}
        />
      )}
    </div>
  );
}

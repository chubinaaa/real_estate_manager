"use client";

import { useEffect, useState } from "react";
import SelectOptions from "../../ui/selections/SelectOptions";

type Props = {
  regions: Array<Region> | null;
  cities: Array<City> | null;
};

export default function Selections({ cities, regions }: Props) {
  const regionState = useState(0);
  const cityState = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const savedRegion =
        Number(localStorage.getItem("estate_upload_region_selection")) || 0;
      const savedCity =
        Number(localStorage.getItem("estate_upload_city_selection")) || 0;
      regionState[1](savedRegion);
      cityState[1](savedCity);
    }
  }, []);

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
      {cities && regionState[0] !== 0 && (
        <SelectOptions
          id="estate_upload_city_selection"
          name="city_id"
          labelText="ქალაქი"
          options={cities
            .filter((city) => city.region_id === regionState[0])
            .map((city) => ({ id: city.id, name: city.name }))}
          state={cityState}
        />
      )}
    </div>
  );
}

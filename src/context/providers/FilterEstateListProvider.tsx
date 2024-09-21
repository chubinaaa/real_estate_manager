"use client";

import { useEffect, useState } from "react";
import { FilterEstateListContext } from "../ctx";

type Props = {
  children: React.ReactNode;
};

export default function FilterEstateListProvider({ children }: Props) {
  const filter = useState<FilterParams>({
    region: [],
    price: [],
    area: [],
    bedrooms: [],
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      try {
        const area = JSON.parse(
          localStorage.getItem("area") || "[]"
        ) as Array<number>;
        const bedrooms = JSON.parse(
          localStorage.getItem("bedrooms") || "[]"
        ) as Array<number>;
        const price = JSON.parse(
          localStorage.getItem("price") || "[]"
        ) as Array<number>;
        const region = JSON.parse(
          localStorage.getItem("region") || "[]"
        ) as Array<string>;

        filter[1]({ area, bedrooms, price, region });
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  //   localStorage.setItem("region", JSON.stringify(filter[0].region));
  //   localStorage.setItem("bedrooms", JSON.stringify(filter[0].bedrooms));
  //   localStorage.setItem("area", JSON.stringify(filter[0].area));
  //   localStorage.setItem("price", JSON.stringify(filter[0].price));

  return (
    <FilterEstateListContext.Provider value={{ filter }}>
      {children}
    </FilterEstateListContext.Provider>
  );
}

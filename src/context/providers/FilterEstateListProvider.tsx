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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilterEstateListContext.Provider value={{ filter }}>
      {children}
    </FilterEstateListContext.Provider>
  );
}

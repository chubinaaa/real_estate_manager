"use client";

import { useState } from "react";
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

  return (
    <FilterEstateListContext.Provider value={{ filter }}>
      {children}
    </FilterEstateListContext.Provider>
  );
}

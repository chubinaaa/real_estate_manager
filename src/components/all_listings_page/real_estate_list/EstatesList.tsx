"use client";

import { useContext } from "react";
import EstateCard from "./estate_item/EstateCard";
import { FilterEstateListContext as ctx } from "../../../context/ctx";
import {
  isBedroomsCountMatched,
  isRegionsMatched,
} from "../../../utils/helpers";

type Props = {
  data: Array<EstateInList> | null;
};

export default function EstatesList({ data }: Props) {
  const { area, bedrooms, price, region } = useContext(ctx).filter[0];

  const shouldFilterApply =
    area.length > 0 ||
    bedrooms.length > 0 ||
    price.length > 0 ||
    region.length > 0;

  const cb = (estate: EstateInList): boolean => {
    if (shouldFilterApply) {
      return (
        // isPriceRangeMatched() ||
        // isareRangeMatched() ||
        isBedroomsCountMatched(estate.bedrooms, bedrooms) ||
        isRegionsMatched(estate.city.region.name, region)
      );
    } else {
      return true;
    }
  };

  if (!data) return;

  const list = data.filter(cb);

  return (
    <>
      {list.length === 0 ? (
        <p className="w-full text-left text-[18px] font-normal">
          აღნიშნული მონაცემებით განცხადება არ იძებნება
        </p>
      ) : (
        <div className="w-full grid grid-cols-4 gap-5">
          {list.map((estate) => (
            <EstateCard key={estate.id} data={estate} />
          ))}
        </div>
      )}
    </>
  );
}

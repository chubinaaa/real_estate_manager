"use client";

import { useContext } from "react";
import FilterTag from "../../ui/tags/FilterTag";
import { FilterEstateListContext } from "../../../context/ctx";
import Reset from "./Reset";

export default function ChosenFilters() {
  const [filterBy, setFilterBy] = useContext(FilterEstateListContext).filter;

  const isFilterApplied =
    filterBy.area.length > 0 ||
    filterBy.bedrooms.length > 0 ||
    filterBy.price.length > 0 ||
    filterBy.region.length > 0;

  const tags = Object.entries(filterBy);

  return (
    <div className="w-fit h-[30px] flex justify-center items-center gap-2">
      {tags.map((touple) => {
        if (touple[0] === "price" && touple[1].length > 0) {
          const [min, max] = touple[1] as Array<number>;
          return (
            <FilterTag
              key={min + max}
              label={`${min}₾ - ${max}₾`}
              deleteAct={() => {
                setFilterBy((prev) => ({ ...prev, price: [] }));
                localStorage.setItem("price", "[]");
              }}
            />
          );
        } else if (touple[0] === "area" && touple[1].length > 0) {
          const [from, to] = touple[1] as Array<string>;
          return (
            <FilterTag
              key={from + to}
              label={`${from}მ2 - ${to}მ2`}
              deleteAct={() => {
                setFilterBy((prev) => ({ ...prev, area: [] }));
                localStorage.setItem("area", "[]");
              }}
            />
          );
        } else {
          const possibleValue = touple[0] as "bedrooms" | "region";

          return touple[1].map((filter) => (
            <FilterTag
              key={filter}
              label={filter.toString()}
              deleteAct={() =>
                setFilterBy((prev) => {
                  const newValue = prev[possibleValue].filter(
                    (el) => el !== filter
                  );

                  localStorage.setItem(possibleValue, JSON.stringify(newValue));
                  return { ...prev, [possibleValue]: newValue };
                })
              }
            />
          ));
        }
      })}
      {isFilterApplied && (
        <Reset
          action={() => {
            localStorage.clear();
            setFilterBy({
              region: [],
              price: [],
              area: [],
              bedrooms: [],
            });
          }}
        />
      )}
    </div>
  );
}

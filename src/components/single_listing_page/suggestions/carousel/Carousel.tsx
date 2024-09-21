import React from "react";
import EstateCard from "../../../all_listings_page/real_estate_list/estate_item/EstateCard";
import NextBtn from "./NextBtn";
import PreviousBtn from "./PreviousBtn";
import { getAllEstates } from "../../../../utils/get_functions";

type Props = {
  excitingRegionId: number;
  excitingListingId: number;
};

export default async function Carousel({
  excitingRegionId,
  excitingListingId,
}: Props) {
  const data = await getAllEstates();

  return (
    <div className="relative w-full">
      <PreviousBtn />
      <div className="w-full grid grid-flow-col gap-5">
        {data &&
          data
            .filter(
              (estate) =>
                estate.id !== excitingListingId &&
                estate.city.region_id === excitingRegionId
            )
            .map((estate) => <EstateCard key={estate.id} data={estate} />)}
      </div>
      <NextBtn />
    </div>
  );
}

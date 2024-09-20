import React from "react";
// import EstateCard from "../../../all_listings_page/real_estate_list/estate_item/EstateCard";
import NextBtn from "./NextBtn";
import PreviousBtn from "./PreviousBtn";

export default function Carousel() {
  return (
    <div className="relative w-full">
      <PreviousBtn />
      {/* <div className="w-full grid grid-cols-4 gap-5">
        <EstateCard />
        <EstateCard />
        <EstateCard />
        <EstateCard />
      </div> */}
      <NextBtn />
    </div>
  );
}

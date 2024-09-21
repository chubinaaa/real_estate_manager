"use client";

import React, { useRef, useState } from "react";
import EstateCard from "../../../all_listings_page/real_estate_list/estate_item/EstateCard";
import NextBtn from "./NextBtn";
import PreviousBtn from "./PreviousBtn";

type Props = {
  excitingRegionId: number;
  excitingListingId: number;
  data: Array<EstateInList>;
};

export default function Carousel({
  excitingRegionId,
  excitingListingId,
  data,
}: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const max = data.length - 4;

  const list = data.filter(
    (estate) =>
      estate.id !== excitingListingId &&
      estate.city.region_id === excitingRegionId
  );

  const handleToRight = () => {
    if (carouselRef.current && step < max) {
      const newStep = step + 1;
      carouselRef.current.style.transform = `translateX(-${newStep * 384}px)`;
      setStep(newStep);
    }
  };

  const handleToLeft = () => {
    if (carouselRef.current && step > 0) {
      const newStep = step - 1;
      carouselRef.current.style.transform = `translateX(-${newStep * 384}px)`;
      setStep(newStep);
    }
  };

  return (
    <div className="relative w-full">
      <PreviousBtn
        action={handleToLeft}
        disabled={step === 0 || list.length < 4}
      />
      <div className="w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="w-max grid grid-flow-col gap-5 whitespace-nowrap | transition-transform duration-300"
        >
          {data &&
            list.map((estate) => <EstateCard key={estate.id} data={estate} />)}
        </div>
      </div>
      <NextBtn
        action={handleToRight}
        disabled={step === max || list.length < 4}
      />
    </div>
  );
}

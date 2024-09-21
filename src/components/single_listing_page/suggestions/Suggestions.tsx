import { getAllEstates } from "../../../utils/get_functions";
import Carousel from "./carousel/Carousel";

type Props = {
  estateId: number;
  estateRegionId: number;
};

export default async function Suggestions({ estateId, estateRegionId }: Props) {
  const data = await getAllEstates();

  return (
    <div className="w-full flex flex-col justify-center items-start mt-[67px] gap-12 mb-[250px]">
      <h1 className="font-medium text-[32px]">ბინები მსგავს ლოკაციაზე</h1>
      <Carousel
        excitingListingId={estateId}
        excitingRegionId={estateRegionId}
        data={data || []}
      />
    </div>
  );
}

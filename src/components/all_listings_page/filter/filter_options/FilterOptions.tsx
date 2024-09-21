import ChooseArea from "./area/ChooseArea";
import ChoosePrice from "./price/ChoosePrice";
import ChooseRegion from "./region/ChooseRegion";
import ChooseBedrooms from "./room/ChooseRoomsCount";

type Props = {
  regionList: Array<Region> | null;
  bedroomCounts: Array<number>;
  maxPrice: number;
};

export default function FilterOptions({
  maxPrice,
  bedroomCounts,
  regionList,
}: Props) {
  return (
    <div className="relative w-fit h-[47px] flex justify-center items-center gap-6 px-[6px] border-[1px] border-thirdGray rounded-[10px]">
      <ChooseRegion data={regionList} />
      <ChoosePrice listingMax={maxPrice} />
      <ChooseArea />
      <ChooseBedrooms data={bedroomCounts} />
    </div>
  );
}

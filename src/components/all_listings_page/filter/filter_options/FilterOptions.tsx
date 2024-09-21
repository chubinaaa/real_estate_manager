import ChooseArea from "./area/ChooseArea";
import ChoosePrice from "./price/ChoosePrice";
import ChooseRegion from "./region/ChooseRegion";
import ChooseBedrooms from "./room/ChooseRoomsCount";

type Props = {
  regionList: Array<Region> | null;
  bedroomCounts: Array<number>;
};

export default function FilterOptions({ bedroomCounts, regionList }: Props) {
  return (
    <div className="relative w-fit h-[47px] flex justify-center items-center gap-6 px-[6px] border-[1px] border-thirdGray rounded-[10px]">
      <ChooseRegion data={regionList} />
      <ChoosePrice />
      <ChooseArea />
      <ChooseBedrooms data={bedroomCounts} />
    </div>
  );
}

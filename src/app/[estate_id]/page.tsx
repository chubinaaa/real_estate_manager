import AgentDetails from "../../components/single_listing_page/agent_details/AgentDetails";
import BackBtn from "../../components/single_listing_page/BackBtn";
import Description from "../../components/single_listing_page/Description";
import EstateDetails from "../../components/single_listing_page/estate_details/EstateDetails";
import EstatePicture from "../../components/single_listing_page/EstatePicture";
import GrayButton from "../../components/ui/buttons/GrayButton";

export default function SingleEstatePage() {
  return (
    <main className="w-full max-w-customMax mx-auto mt-16 | flex flex-col justify-center items-start">
      <BackBtn />
      <div className="w-full flex justify-between items-start | mt-[30px]">
        <EstatePicture value="" />
        <div className="w-full flex flex-col justify-center items-start pl-[68px] pt-[30px]">
          <EstateDetails />
          <Description />
          <AgentDetails />
          <GrayButton text="ლისტინგის წაშლა" />
        </div>
      </div>
    </main>
  );
}

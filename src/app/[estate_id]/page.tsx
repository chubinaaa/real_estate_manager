import AgentDetails from "../../components/single_listing_page/agent_details/AgentDetails";
import BackBtn from "../../components/single_listing_page/BackBtn";
import CreatedAt from "../../components/single_listing_page/CreatedAt";
import DeleteListing from "../../components/single_listing_page/delete_listing/DeleteListing";
import Description from "../../components/single_listing_page/Description";
import EstateDetails from "../../components/single_listing_page/estate_details/EstateDetails";
import EstatePicture from "../../components/single_listing_page/EstatePicture";
import IsRental from "../../components/single_listing_page/IsRental";
import Suggestions from "../../components/single_listing_page/suggestions/Suggestions";
import { getSingleEstateData } from "../../utils/get_functions";

export default async function SingleEstatePage({ params }: PageProps) {
  const data = await getSingleEstateData(params.estate_id);

  return (
    <main className="w-full max-w-customMax mx-auto mt-16 | flex flex-col justify-center items-start">
      <BackBtn />
      {data ? (
        <>
          <div className="w-full flex justify-between items-start | mt-[30px]">
            <div className="relative w-[110%] flex flex-col justify-center items-end gap-3 | rounded-[14px] rounded-b-none overflow-hidden">
              <IsRental isRental={data.is_rental} />
              <EstatePicture source={data.image} />
              <CreatedAt value={data.created_at} />
            </div>
            <div className="w-full flex flex-col justify-center items-start pl-[68px] pt-[30px]">
              <EstateDetails
                area={data.area}
                bedrooms={data.bedrooms}
                location={{ address: data.address, city: data.city.name }}
                price={data.price}
                zip_code={data.zip_code}
              />
              <Description data={data.description} />
              <AgentDetails
                image={data.agent.avatar}
                name={data.agent.name}
                surname={data.agent.surname}
                email={data.agent.email}
                phone={data.agent.phone}
              />
              <DeleteListing id={data.id} />
            </div>
          </div>
          <Suggestions />
        </>
      ) : (
        <p className="w-full text-center mt-10">No data found</p>
      )}
    </main>
  );
}

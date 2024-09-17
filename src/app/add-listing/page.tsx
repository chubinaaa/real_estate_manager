import Agent from "../../components/add_listing_page/agent/Agent";
import Add from "../../components/add_listing_page/buttons/Add";
import Cancel from "../../components/add_listing_page/buttons/Cancel";
import DealType from "../../components/add_listing_page/deal_type/DealType";
import EstateDetails from "../../components/add_listing_page/estate_details/EstateDetails";
import Heading from "../../components/add_listing_page/Heading";
import Location from "../../components/add_listing_page/location/Location";

export default function AddListingPage() {
  return (
    <main className="w-full max-w-customMax mx-auto">
      <Heading />
      <div className="w-full max-w-[790px] mx-auto mt-[60px] | flex flex-col justify-center items-start gap-[80px]">
        <DealType />
        <Location />
        <EstateDetails />
        <Agent />
      </div>
      <div className="w-full max-w-[790px] | flex justify-end items-center gap-[15px] | mx-auto mt-[90px] mb-[87px]">
        <Cancel />
        <Add />
      </div>
    </main>
  );
}

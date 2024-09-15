import AddAgent from "../components/all_listings_page/buttons/AddAgent";
import AddListing from "../components/all_listings_page/buttons/AddListing";
import ChosenFilters from "../components/all_listings_page/filter/ChosenFilters";
import FilterOptions from "../components/all_listings_page/filter/filter_options/FilterOptions";
import EstatesList from "../components/all_listings_page/real_estate_list/EstatesList";

export default function Home() {
  return (
    <div className="w-full max-w-customMax mx-auto mt-[77px] flex flex-col justify-center items-center gap-8">
      <div className="w-full flex justify-between items-start">
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <FilterOptions />
          <ChosenFilters />
        </div>
        <div className="w-fit flex justify-center items-center gap-4">
          <AddListing />
          <AddAgent />
        </div>
      </div>
      <EstatesList />
    </div>
  );
}

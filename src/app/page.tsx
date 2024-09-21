import AddAgent from "../components/all_listings_page/buttons/AddAgent";
import AddListing from "../components/all_listings_page/buttons/AddListing";
import ChosenFilters from "../components/all_listings_page/filter/ChosenFilters";
import FilterOptions from "../components/all_listings_page/filter/filter_options/FilterOptions";
import EstatesList from "../components/all_listings_page/real_estate_list/EstatesList";
import FilterEstateListProvider from "../context/providers/FilterEstateListProvider";
import { getAllEstates, getRegionList } from "../utils/get_functions";

export default async function Home() {
  const estateList = await getAllEstates();
  const regionList = await getRegionList();

  return (
    <FilterEstateListProvider>
      <main className="w-full max-w-customMax mx-auto mt-[77px] flex flex-col justify-center items-center gap-8">
        <div className="w-full flex justify-between items-start">
          <div className="w-full flex flex-col justify-center items-start gap-4">
            <FilterOptions
              regionList={regionList}
              bedroomCounts={
                estateList
                  ? estateList
                      .map((estate) => estate.bedrooms)
                      .filter((val, idx, self) => self.indexOf(val) === idx)
                      .sort((a, b) => a - b)
                  : []
              }
              maxPrice={
                estateList
                  ? Math.max(...estateList.map((listing) => listing.price))
                  : 0
              }
            />
            <ChosenFilters />
          </div>
          <div className="w-fit flex justify-center items-center gap-4">
            <AddListing />
            <AddAgent />
          </div>
        </div>
        <EstatesList data={estateList} />
      </main>
    </FilterEstateListProvider>
  );
}

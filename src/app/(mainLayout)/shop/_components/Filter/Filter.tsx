import FilterByCategories from "./FilterByCategories";
import FilterByPriceRange from "./FilterByPrice";
import FilterByRating from "./FilterByRating";

const Filter = () => {
  return (
    <div className="lg:col-span-2 col-span-4 space-y-4 pl-2">
      <FilterByCategories></FilterByCategories>
      <FilterByPriceRange></FilterByPriceRange>
      <FilterByRating></FilterByRating>
    </div>
  );
};

export default Filter;

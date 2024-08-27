import FilterByAuthor from "./FilterByAuthor";
import FilterByCategories from "./FilterByCategories";
import FilterByRating from "./FilterByRating";

const Filter = () => {
  return (
    <div className="col-span-3">
      <FilterByCategories></FilterByCategories>
      <FilterByAuthor></FilterByAuthor>
      <FilterByRating></FilterByRating>
    </div>
  );
};

export default Filter;

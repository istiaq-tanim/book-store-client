import Filter from "./_components/Filter/Filter";
import FilterItem from "./_components/Filter/FilterItem";

const ShopPage = () => {
  return (
    <div className="container grid grid-cols-12 my-10 gap-5">
      <Filter></Filter>
      <FilterItem></FilterItem>
    </div>
  );
};

export default ShopPage;

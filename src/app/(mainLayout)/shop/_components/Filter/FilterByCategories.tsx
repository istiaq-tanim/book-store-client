const FilterByCategories = () => {
  return (
    <div className="border border-slate-200 p-5">
      <h3 className="font-bold text-lg">Categories</h3>
      <form action="" className="flex flex-col">
        <input name="5" id="fiveStar" />
        Arts & Biography
        <input name="4" id="fourStar" />
        Baby
        <input name="3" id="threeStar" />
        Biography
        <input name="2" id="twoStar" /> Food & Drink
        <input name="1" id="oneStar" />
        Health
      </form>
    </div>
  );
};

export default FilterByCategories;

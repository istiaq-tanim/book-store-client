const FilterByAuthor = () => {
  return (
    <div className="border border-slate-200 p-5">
      <h3 className="font-bold text-lg">Categories</h3>
      <form action="" className="flex flex-col gap-5 mt-5">
        <div className="flex justify-between">
          <p>A G Riddle</p>
          <p>(3)</p>
        </div>
        <div className="flex justify-between">
          <p>Andre Aciman</p>
          <p>(2)</p>
        </div>
        <div className="flex justify-between">
          <p>Anna Banks</p>
          <p>(2)</p>
        </div>
        <div className="flex justify-between">
          <p>Ashlee Vance</p>
          <p>(2)</p>
        </div>
        <div className="flex justify-between">
          <p>Blake Crouch</p>
          <p>(2)</p>
        </div>
      </form>
    </div>
  );
};

export default FilterByAuthor;

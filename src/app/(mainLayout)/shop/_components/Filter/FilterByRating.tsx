import Rating from "@/components/Rating";
import { Checkbox } from "@/components/ui/checkbox";

const FilterByRating = () => {
  return (
    <div className="border border-slate-200 p-5">
      <h3 className="font-bold text-lg">Categories</h3>
      <form action="" className="flex flex-col mt-5 gap-2">
        <div className="items-top flex space-x-2">
          <Checkbox
            className="data-[state=checked]:bg-[#f75454] border-slate-300"
            id="terms1"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <Rating value={5}></Rating>
            </label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox
            className="data-[state=checked]:bg-[#f75454] border-slate-300"
            id="terms1"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <Rating value={4}></Rating>
            </label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox
            className="data-[state=checked]:bg-[#f75454] border-slate-300"
            id="terms1"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <Rating value={3}></Rating>
            </label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox
            className="data-[state=checked]:bg-[#f75454] border-slate-300"
            id="terms1"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <Rating value={2}></Rating>
            </label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox
            className="data-[state=checked]:bg-[#f75454] border-slate-300"
            id="terms1"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <Rating value={1}></Rating>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterByRating;

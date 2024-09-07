"use client";
import Rating from "@/components/Rating";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByRating = () => {
  const [query, setQuery] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const name = e.target.name;
    const checked = e.target.checked;
    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item !== name);
      setQuery(filtered);
    }
  };

  useEffect(() => {
    const rating = params.get("ratings");
    if (rating) {
      const decodedRating = decodeURI(rating);
      const queryInRating = decodedRating.split("|");
      setQuery(queryInRating);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("ratings", encodeURI(query.join("|")));
    } else {
      params.delete("ratings");
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div className="border border-slate-200 p-5">
      <h3 className="font-bold text-lg">Ratings</h3>
      <form action="" className="flex flex-col mt-5 gap-2">
        <div className="items-top flex space-x-2">
          <label htmlFor="fiveStar" className="flex gap-2">
            <input
              type="checkbox"
              name="5"
              checked={query.includes("5")}
              id="fiveStar"
              onChange={handleChange}
            />
            <Rating value={5}></Rating>
          </label>
        </div>
        <div className="items-top flex space-x-2">
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="fourStar" className="flex gap-2">
              <input
                type="checkbox"
                name="4"
                checked={query.includes("4")}
                id="fourStar"
                onChange={handleChange}
              />
              <Rating value={4}></Rating>
            </label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="threeStar" className="flex gap-2">
              <input
                type="checkbox"
                name="3"
                checked={query.includes("3")}
                id="fourStar"
                onChange={handleChange}
              />
              <Rating value={3}></Rating>
            </label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="threeStar" className="flex gap-2">
              <input
                type="checkbox"
                name="2"
                checked={query.includes("2")}
                id="twoStar"
                onChange={handleChange}
              />
              <Rating value={2}></Rating>
            </label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="oneStar" className="flex gap-2">
              <input
                type="checkbox"
                name="1"
                checked={query.includes("1")}
                id="twoStar"
                onChange={handleChange}
              />
              <Rating value={1}></Rating>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterByRating;

"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByCategory = () => {
  const [category, setCategory] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(searchParams);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, checked } = e.target;

    if (checked) {
      setCategory((prev) => [...prev, name]);
    } else {
      const filtered = category.filter((item) => item !== name);
      setCategory(filtered);
    }
  };

  useEffect(() => {
    const category = params.get("category");
    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInPrice = decodedCategory.split("|");
      setCategory(queryInPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (category.length > 0) {
      params.set("category", encodeURI(category.join("|")));
    } else {
      params.delete("category");
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  return (
    <div>
      <h3 className="font-bold text-lg">Categories</h3>
      <form
        action=""
        className="flex flex-col gap-2 mt-2 border border-[#E2E2E2] p-3"
      >
        <label htmlFor="arts" className="flex gap-2">
          <input
            type="checkbox"
            checked={category.includes("arts")}
            name="arts"
            id="arts"
            onChange={handleChange}
            className="pr-2"
          />
          <span>Arts</span>
        </label>
        <label htmlFor="drama" className="flex gap-2">
          <input
            type="checkbox"
            checked={category.includes("drama")}
            name="drama"
            id="drama"
            onChange={handleChange}
          />
          <span>Drama</span>
        </label>
        <label htmlFor="mystery" className="flex gap-2">
          <input
            type="checkbox"
            checked={category.includes("mystery")}
            name="mystery"
            id="mystery"
            onChange={handleChange}
          />
          <span>Mystery</span>
        </label>
        <label htmlFor="horror" className="flex gap-2">
          <input
            type="checkbox"
            name="horror"
            checked={category.includes("horror")}
            id="horror"
            onChange={handleChange}
          />
          <span>Horror</span>
        </label>
        <label htmlFor="fiction" className="flex gap-2">
          <input
            type="checkbox"
            checked={category.includes("fiction")}
            name="fiction"
            id="fiction"
            onChange={handleChange}
          />
          <span>Fiction</span>
        </label>
      </form>
    </div>
  );
};

export default FilterByCategory;

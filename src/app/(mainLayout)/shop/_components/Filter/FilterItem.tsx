import BookCard from "@/app/(mainLayout)/_components/BookCard/BookCard";
import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import Link from "next/link";

const FilterItem = async () => {
  const response = await fetch(
    "https://book-store-server-green.vercel.app/books",
    {
      cache: "no-store",
    }
  );
  const items = await response.json();
  return (
    <div className="col-span-9 grid grid-cols-4">
      {items?.data.map((item: BookItem, index: number) => (
        <Link href={`/product/${item?._id}`} key={index}>
          <BookCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default FilterItem;

import BookCard from "@/app/(mainLayout)/_components/BookCard/BookCard";
import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import Link from "next/link";

const FilterItem = ({ products }: { products: BookItem[] }) => {
  return (
    <div className="col-span-10 grid grid-cols-5">
      {products?.map((item: BookItem, index: number) => (
        <Link href={`/product/${item?._id}`} key={index}>
          <BookCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default FilterItem;

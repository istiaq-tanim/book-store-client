import Rating from "@/components/Rating";
import Image from "next/image";
import { BookItem } from "../BookCardList/BookCardList";
import CartButton from "../CartButton/CartButton";

const BookCard = ({ item }: { item: BookItem }) => {
  return (
    <div className="relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-96 w-56 border border-slate-200 hover:duration-700 flex flex-col  items-center p-5">
      <Image
        className="w-36 h-48 object-cover"
        src={item?.image}
        alt={item?.title}
        width={200}
        height={200}
      />

      <div className="absolute bg-gray-50 -bottom-14 w-56 p-3  gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 items-center ease-in-out">
        <div className="p-3">
          <Rating value={item?.ratings}></Rating>
          <span className="block text-sm text-red-600 font-semibold uppercase pt-2">
            {item?.format}
          </span>
          <h3 className="text-lg  text-gray-800 mt-1 text-justify">
            {item?.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{item?.author}</p>
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="text-xl font-bold text-gray-900">
                ${item?.price}
              </span>
              {item?.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${item?.originalPrice}
                </span>
              )}
            </div>
            <CartButton product={item}></CartButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

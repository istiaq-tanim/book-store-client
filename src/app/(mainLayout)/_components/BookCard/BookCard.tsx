import Image from "next/image";
import { BookItem } from "../BookCardList/BookCardList";

const BookCard = ({ item }: { item: BookItem }) => {
  return (
    <div className="w-56 h-96 flex flex-col justify-center items-center border border-slate-200 overflow-hidden">
      <Image
        className="w-36 h-44 object-cover"
        src={item?.image}
        alt={item?.title}
        width={200}
        height={200}
      />
      <div className="p-3">
        <span className="block text-sm text-red-600 font-semibold uppercase">
          {item?.format}
        </span>
        <h3 className="text-lg  text-gray-800 mt-1 text-justify">
          {item?.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{item?.author}</p>
        <div className="flex items-center mt-3">
          <span className="text-xl font-bold text-gray-900">
            ${item?.price}
          </span>
          {item?.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ${item?.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;

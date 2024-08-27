import Image from "next/image";
import React from "react";

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  price: string;
  originalPrice?: string;
  format: string;
}

const BookCard: React.FC<BookCardProps> = ({
  image,
  title,
  author,
  price,
  originalPrice,
  format,
}) => {
  return (
    <div className="max-w-xl h-96 flex flex-col justify-center border border-slate-200 overflow-hidden p-2">
      <Image
        className="w-36 h-44 object-cover mx-auto"
        src={image}
        alt={title}
        width={480}
        height={480}
      />
      <div className="p-3">
        <span className="block text-sm text-red-600 font-semibold uppercase">
          {format}
        </span>
        <h3 className="text-lg  text-gray-800 mt-1 text-justify">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{author}</p>
        <div className="flex items-center mt-3">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;

import Image from "next/image";
import React from "react";

interface DealCardProps {
  image: string;
  title: string;
  author: string;
  price: string;
  originalPrice?: string;
  format: string;
}

const DealCard: React.FC<DealCardProps> = ({
  image,
  title,
  author,
  price,
  originalPrice,
  format,
}) => {
  return (
    <div className="h-96 flex gap-5 items-center border border-slate-200 overflow-hidden">
      <div>
        <Image
          className="w-48 h-72 object-cover mx-auto pl-5 "
          src={image}
          alt={title}
          width={720}
          height={720}
        />
      </div>
      <div>
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

export default DealCard;

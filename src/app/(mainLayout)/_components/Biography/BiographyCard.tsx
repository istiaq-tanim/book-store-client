import Image from "next/image";
import React from "react";

interface BioCardProps {
  image: string;
  title: string;
  author: string;
  price: string;
  originalPrice?: string;
  format: string;
}

const BioCard: React.FC<BioCardProps> = ({
  image,
  title,
  author,
  price,
  originalPrice,
  format,
}) => {
  return (
    <div className="h-64 flex gap-5 items-center border border-slate-200 overflow-hidden">
      <div>
        <Image
          className="w-36 h-48 object-cover mx-auto pl-3"
          src={image}
          alt={title}
          width={320}
          height={320}
        />
      </div>
      <div>
        <span className="block text-sm text-red-600 font-semibold uppercase">
          {format}
        </span>
        <h3 className=" text-gray-800 mt-1 text-justify pr-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{author}</p>
        <div className="flex items-center mt-3">
          <span className="font-bold text-gray-900">${price}</span>
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

export default BioCard;

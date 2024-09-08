import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import Rating from "@/components/Rating";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import AddToCart from "./AddToCart";

const ProductDetails = ({ book }: { book: BookItem }) => {
  return (
    <div className="container grid grid-cols-2 gap-3 py-10">
      <div className="flex justify-center items-center">
        <Image
          src={book?.image}
          alt="product"
          width={300}
          height={300}
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl font-medium uppercase mb-2">{book?.title}</h2>
        <div className="flex lg:items-center flex-col lg:flex-row mb-4">
          <div className="flex gap-1 text-sm text-yellow-400">
            <Rating value={book?.ratings}></Rating>
          </div>
          <div className="lg:ml-5 my-5">
            By (author) <span className="text-gray-500">{book?.author}</span>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-gray-800 font-semibold text-2xl">
            ${book?.price} – ${book?.originalPrice}
          </p>
        </div>
        <p className="mt-4 text-justify">{book?.description}</p>

        <p className="space-x-2 my-5">
          <span className="text-gray-800 font-medium">BookFormat: </span>
          <span className="text-gray-600">Choose an option</span>
        </p>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 text-black font-medium border-b border-gray-200 pb-5">
          {book.format?.map((item) => (
            <div key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="flex lg:flex-row flex-col items-center lg:gap-5 gap-2">
          <AddToCart product={book}></AddToCart>
          <div className="flex gap-1">
            <Heart strokeWidth={0.5}></Heart>
            <span>Add to wishlist</span>
          </div>
          <div className="flex gap-1">
            <Share2 strokeWidth={0.5}></Share2>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

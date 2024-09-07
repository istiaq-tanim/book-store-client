import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BookCard from "../BookCard/BookCard";

export interface ReviewItem {
  date: string;
  name: string;
  review: string;
}
export interface BookItem {
  _id: string;
  image: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: string;
  ratings: number;
  format: string[];
  description: string;
  reviews: ReviewItem[];
  category: string;
  onSale: boolean;
  saleNumber: number;
  featured: true;
}

const BookCardList = async () => {
  const response = await fetch(
    "https://book-store-server-green.vercel.app//books",
    {
      cache: "no-store",
    }
  );
  const items = await response.json();
  return (
    <div className="container my-20">
      <div className="flex justify-between">
        <p className="text-3xl font-semibold">Bestselling Books</p>
        <div className="flex flex-row">
          <Link href="/shop" className="hover:text-[#f75454]">
            View All
          </Link>
          <ChevronRight strokeWidth={1} />
        </div>
      </div>
      <div className="mt-10">
        <Carousel className="relative">
          <CarouselContent>
            {items?.data.map((item: BookItem, index: number) => (
              <CarouselItem key={index} className="lg:basis-1/5 basis-1/2">
                <Link href={`/product/${item?._id}`} key={index}>
                  <BookCard item={item} />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default BookCardList;

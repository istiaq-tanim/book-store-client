"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import DealCard from "./DealCard";

const items = [
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/1-200x327.jpg",
    title: "Versus",
    author: "Barbara O'Neal",
    price: "1.30",
    originalPrice: "1.75",
    format: "Kindle",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg",
    title: "The Last Sister (Columbia River Book 1)",
    author: "Jessica Simpson",
    price: "14.20",
    format: "Hardcover",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
    title: "Think Like a Monk",
    author: "J.D. Robb",
    price: "14.20",
    format: "Hardcover",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/10-300x449.jpg",
    title: "Blindside",
    author: "Michael Bennett",
    price: "1.30",
    originalPrice: "6.5",
    format: "Kindle",
  },
  {
    image: "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/9.jpg",
    title: "Until the End of Time",
    author: "James Patterson",
    price: "1.30",
    originalPrice: "8",
    format: "Kindle",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/8-300x449.jpg",
    title: "Open Book: A Memoir",
    author: "Jessica Simpson",
    price: "1.30",
    originalPrice: "3.5",
    format: "Kindle",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/50-300x444.jpg",
    title: "Where the Crawdads Sing",
    author: "L.J. Shen",
    price: "1.30",
    originalPrice: "7.75",
    format: "Kindle",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/26-300x449.jpg",
    title: "The Overdue Life of Amy Byler",
    author: "Kelly Harms",
    price: "1.30",
    originalPrice: "5.5",
    format: "Kindle",
  },
];

const DealList = () => {
  return (
    <div className="container my-20">
      <div className="flex justify-between">
        <p className="text-3xl font-semibold">Deals of the week</p>
        <div className="flex flex-row">
          <p className="hover:text-[#f75454]">View All</p>
          <ChevronRight strokeWidth={1} />
        </div>
      </div>
      <div className="mt-10">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {items?.slice(0, 8).map((item, index: number) => (
              <CarouselItem key={index} className="basis-1/2">
                <DealCard
                  image={item?.image}
                  title={item?.title}
                  author={item?.author}
                  price={item?.author}
                  originalPrice={item.originalPrice}
                  format={item?.format}
                  key={index}
                ></DealCard>
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

export default DealList;

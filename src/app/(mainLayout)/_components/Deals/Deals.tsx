"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DealCard from "./DealCard";

const items = [
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
    title: "Angry God (All Saints High Book 3)",
    author: "L.J. Shen",
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
    title: "Think Like a Monk: Train Your Mind for Peace and Purpose Everyday",
    author: "J.D. Robb",
    price: "14.20",
    format: "Hardcover",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg",
    title: "Angry God (All Saints High Book 3)",
    author: "L.J. Shen",
    price: "1.30",
    originalPrice: "1.75",
    format: "Kindle",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
    title: "Angry God (All Saints High Book 3)",
    author: "L.J. Shen",
    price: "1.30",
    originalPrice: "1.75",
    format: "Kindle",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
    title: "Angry God (All Saints High Book 3)",
    author: "L.J. Shen",
    price: "1.30",
    originalPrice: "1.75",
    format: "Kindle",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
    title: "Angry God (All Saints High Book 3)",
    author: "L.J. Shen",
    price: "1.30",
    originalPrice: "1.75",
    format: "Kindle",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
    title: "Angry God (All Saints High Book 3)",
    author: "L.J. Shen",
    price: "1.30",
    originalPrice: "1.75",
    format: "Kindle",
  },
];

const DealList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="container my-20">
      <div className="flex justify-between">
        <p className="text-3xl font-semibold">Deals of the Week</p>
        <div className="flex flex-row">
          <Link href="/shop" className="hover:text-[#f75454]">
            View All
          </Link>
          <ChevronRight strokeWidth={1} />
        </div>
      </div>
      <div className="mt-10">
        <Carousel className="relative">
          <button
            onClick={handlePrev}
            className="absolute z-10 -left-[90px] top-1/2 transform -translate-y-1/2 bg-[#fff] p-2 text-[#858380] border border-[#b6b5b2]"
          >
            <ChevronLeft />
          </button>
          <CarouselContent
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 ">
                <DealCard
                  image={item.image}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  format={item.format}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <button
            onClick={handleNext}
            className="absolute -right-[90px] top-1/2 transform -translate-y-1/2 bg-[#fff] p-2 text-[#858380] border border-[#b6b5b2]"
          >
            <ChevronRight />
          </button>
        </Carousel>
      </div>
    </div>
  );
};

export default DealList;

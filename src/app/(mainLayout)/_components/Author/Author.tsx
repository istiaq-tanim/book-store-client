"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import { AuthorCard } from "./AuthorCard";

const items = [
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/09/13.jpg",
    name: "Anna Burns",
    books: "2 Published Books",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/09/4-1.jpg",
    name: "A G Riddle",
    books: "5 Published Books",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/09/12.jpg",
    name: "Andre Aciman",
    books: "2 Published Books",
  },
  {
    image: "https://bookworm.madrasthemes.com/wp-content/uploads/2020/09/8.jpg",
    name: "Anna Banks",
    books: "3 Published Books",
  },
  {
    image: "https://bookworm.madrasthemes.com/wp-content/uploads/2020/09/1.jpg",
    name: "Ashlee Vance",
    books: "4 Published Books",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/09/17.jpg",
    name: "Barbara O'Neal",
    books: "3 Published Books",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/09/15.jpg",
    name: "Blake Crouch",
    books: "4 Published Books",
  },
  {
    image:
      "https://bookworm.madrasthemes.com/wp-content/uploads/2020/09/18.jpg",
    name: "Boo Walker",
    books: "4 Published Books",
  },
];

const AuthorList = () => {
  return (
    <div className="container my-20">
      <div className="flex justify-between">
        <p className="text-3xl font-semibold">Favorite Authors</p>
        <div className="flex flex-row">
          <p className="hover:text-[#f75454]">View All</p>
          <ChevronRight strokeWidth={1} />
        </div>
      </div>
      <div className="mt-10">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {items.map((item, index) => (
              <AuthorCard item={item} key={index}></AuthorCard>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default AuthorList;

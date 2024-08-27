"use client";
import { ChevronRight } from "lucide-react";
import BioCard from "./BiographyCard";

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
    title: "Think Like a Monk",
    author: "J.D. Robb",
    price: "14.20",
    format: "Hardcover",
  },
];

const BioList = () => {
  return (
    <div className="container my-20">
      <div className="flex justify-between">
        <p className="text-3xl font-semibold">Biographies Books</p>
        <div className="flex flex-row">
          <p className="hover:text-[#f75454]">View All</p>
          <ChevronRight strokeWidth={1} />
        </div>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1">
        {items.map((item, index) => (
          <BioCard
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            price={item.price}
            originalPrice={item.originalPrice}
            format={item.format}
          />
        ))}
      </div>
    </div>
  );
};

export default BioList;

"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import { BookItem } from "../BookCardList/BookCardList";

const Featured = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://book-store-server-green.vercel.app/featuredBook?query=${activeTab}`
      );
      const items = await response.json();
      setBooks(items?.data);
    };
    fetchBooks();
  }, [activeTab]);

  return (
    <div className="container">
      <div className="flex justify-center mb-10">
        <p className="text-3xl font-semibold">Featured Books</p>
      </div>
      <Tabs
        defaultValue="featured"
        onValueChange={setActiveTab}
        className="lg:max-w-full"
      >
        <TabsList className="flex bg-white">
          <TabsTrigger
            value="featured"
            className={`relative rounded-none px-4 py-2  focus:outline-none ${
              activeTab === "featured" ? "border-b-2 border-black pb-2" : ""
            }`}
          >
            Featured
          </TabsTrigger>
          <TabsTrigger
            value="onSale"
            className={`relative rounded-none px-4 py-2 focus:outline-none ${
              activeTab === "onSale" ? "border-b-2 border-black pb-2" : ""
            }`}
          >
            On Sale
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="featured"
          className="flex lg:flex-row flex-col justify-center items-center mt-5"
        >
          {books.slice(0, 6).map((item: BookItem, index: number) => (
            <Link href={`/product/${item?._id}`} key={index}>
              <BookCard item={item} />
            </Link>
          ))}
        </TabsContent>
        <TabsContent
          value="onSale"
          className="flex lg:flex-row flex-col justify-center items-center "
        >
          {books.slice(0, 6).map((item, index) => (
            <BookCard key={index} item={item} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Featured;

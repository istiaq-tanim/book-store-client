"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const NewRelease = () => {
  const [activeTab, setActiveTab] = useState("history");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        "https://book-store-server-green.vercel.app/books"
      );
      const items = await response.json();
      setBooks(items?.data);
    };
    fetchBooks();
  }, []);
  return (
    <div className="container my-20 relative">
      <span className="text-3xl lg:absolute flex justify-center my-5 top-1">
        New Releases
      </span>
      <div className="flex">
        <Tabs
          defaultValue="history"
          onValueChange={setActiveTab}
          className="lg:max-w-full"
        >
          <TabsList className="flex bg-white justify-end">
            <TabsTrigger
              value="history"
              className={`relative rounded-none px-4 py-2  focus:outline-none ${
                activeTab === "history" ? "border-b-2 border-black pb-2" : ""
              }`}
            >
              History
            </TabsTrigger>
            <TabsTrigger
              value="science"
              className={`relative rounded-none px-4 py-2 focus:outline-none ${
                activeTab === "science" ? "border-b-2 border-black pb-2" : ""
              }`}
            >
              Science & Math
            </TabsTrigger>
            <TabsTrigger
              value="romance"
              className={`relative rounded-none px-4 py-2 focus:outline-none ${
                activeTab === "romance" ? "border-b-2 border-black pb-3" : ""
              }`}
            >
              Romance
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="history"
            className="flex lg:flex-row flex-col justify-center"
          >
            <div className="lg:grid grid-cols-12 mt-10">
              <div className="col-span-4 bg-[#fff6f6]">
                <div className="flex flex-col justify-center items-center pt-20">
                  <Image
                    src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-13.png"
                    alt="image"
                    width={360}
                    height={360}
                  />
                  <div className="space-y-3 p-10">
                    <p className="text-5xl font-semibold">Get Extra</p>
                    <p className="text-5xl text-red-500 font-bold">Sale -25%</p>
                    <p className="text-[#beb4b4] text-3xl">
                      ON ORDER OVER $100
                    </p>

                    <Button className="rounded-none px-10 mt-5 bg-[#f75454] hover:bg-[#fa4141]">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-8 grid lg:grid-cols-4 grid-cols-2">
                {books.map((item, index) => (
                  <BookCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="science"
            className="flex lg:flex-row flex-col justify-center"
          >
            <div className="grid grid-cols-12 mt-10">
              <div className="col-span-4 bg-[#fff6f6]">
                <div className="flex flex-col justify-center items-center pt-20">
                  <Image
                    src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-13.png"
                    alt="image"
                    width={240}
                    height={240}
                  />
                  <div className="space-y-3 p-10">
                    <p className="text-5xl font-semibold">Get Extra</p>
                    <p className="text-5xl text-red-500 font-bold">Sale -25%</p>
                    <p className="text-[#beb4b4] text-3xl">
                      ON ORDER OVER $100
                    </p>

                    <Button className="rounded-none px-10 mt-5 bg-[#f75454] hover:bg-[#fa4141]">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-8 grid grid-cols-4">
                {books.map((item, index) => (
                  <BookCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="romance"
            className="flex lg:flex-row flex-col justify-center"
          >
            <div className="grid grid-cols-12 mt-10">
              <div className="col-span-4 bg-[#fff6f6]">
                <div className="flex flex-col justify-center items-center pt-20">
                  <Image
                    src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-13.png"
                    alt="image"
                    width={240}
                    height={240}
                  />
                  <div className="space-y-3 p-10">
                    <p className="text-5xl font-semibold">Get Extra</p>
                    <p className="text-5xl text-red-500 font-bold">Sale -25%</p>
                    <p className="text-[#beb4b4] text-3xl">
                      ON ORDER OVER $100
                    </p>

                    <Button className="rounded-none px-10 mt-5 bg-[#f75454] hover:bg-[#fa4141]">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-8 grid grid-cols-4">
                {books.map((item, index) => (
                  <BookCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NewRelease;

"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const NewRelease = () => {
  const [activeTab, setActiveTab] = useState("fiction");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://book-store-server-green.vercel.app/newRelease?query=${activeTab}`
      );
      const items = await response.json();
      setBooks(items?.data);
    };
    fetchBooks();
  }, [activeTab]);

  return (
    <div className="container my-20 relative">
      <span className="text-3xl lg:absolute flex justify-center my-5 top-1">
        New Releases
      </span>
      <div className="flex">
        <Tabs
          defaultValue="fiction"
          onValueChange={setActiveTab}
          className="lg:max-w-full w-full"
        >
          <TabsList className="flex bg-white justify-end">
            <TabsTrigger
              value="fiction"
              className={`relative rounded-none px-4 py-2  focus:outline-none ${
                activeTab === "fiction" ? "border-b-2 border-black pb-2" : ""
              }`}
            >
              Fiction
            </TabsTrigger>
            <TabsTrigger
              value="arts"
              className={`relative rounded-none px-4 py-2 focus:outline-none ${
                activeTab === "arts" ? "border-b-2 border-black pb-2" : ""
              }`}
            >
              Arts
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

          {/* Fiction Tab */}
          <TabsContent
            value="fiction"
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
              <div className="col-span-8 grid lg:grid-cols-4 grid-cols-2 auto-rows-fr">
                {books.slice(0, 8).map((item, index) => (
                  <BookCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Arts Tab */}
          <TabsContent
            value="arts"
            className="flex lg:flex-row flex-col justify-center"
          >
            <div className="grid grid-cols-12 mt-10">
              <div className="col-span-4 bg-[#fff6f6] flex flex-col justify-center">
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
              <div className="col-span-8 grid lg:grid-cols-4 grid-cols-2 auto-rows-fr">
                {books.slice(0, 8).map((item, index) => (
                  <BookCard key={index} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Romance Tab */}
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
              <div className="col-span-8 grid lg:grid-cols-4 grid-cols-2 auto-rows-fr">
                {books.slice(0, 8).map((item, index) => (
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

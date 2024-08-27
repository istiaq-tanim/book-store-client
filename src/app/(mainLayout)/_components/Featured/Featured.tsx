"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import BookCard from "../BookCard/BookCard";

const Featured = () => {
  const [activeTab, setActiveTab] = useState("featured");
  return (
    <div>
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
            value="sale"
            className={`relative rounded-none px-4 py-2 focus:outline-none ${
              activeTab === "sale" ? "border-b-2 border-black pb-2" : ""
            }`}
          >
            On Sale
          </TabsTrigger>
          <TabsTrigger
            value="viewed"
            className={`relative rounded-none px-4 py-2 focus:outline-none ${
              activeTab === "viewed" ? "border-b-2 border-black pb-3" : ""
            }`}
          >
            Most Viewed
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="featured"
          className="flex lg:flex-row flex-col justify-center mt-5"
        >
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
        </TabsContent>
        <TabsContent
          value="sale"
          className="flex lg:flex-row flex-col justify-center"
        >
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
        </TabsContent>
        <TabsContent
          value="viewed"
          className="flex lg:flex-row flex-col justify-center"
        >
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/32-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/32-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/32-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/32-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/32-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
          <BookCard
            image="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/32-120x183.jpg"
            title="Angry God (All Saints High Book 3)"
            author="L.J. Shen"
            price="1.30"
            originalPrice="1.75"
            format="Kindle"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Featured;

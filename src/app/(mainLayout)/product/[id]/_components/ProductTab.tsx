"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Details from "./Details";
import ProductTable from "./ProductTable";
import Review from "./Review";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <Tabs
      defaultValue="description"
      onValueChange={setActiveTab}
      className="lg:max-w-full"
    >
      <TabsList className="flex bg-[#fff6f6] py-10">
        <TabsTrigger
          value="description"
          className={`relative rounded-none px-4 py-2  focus:outline-none ${
            activeTab === "description" ? "border-b-2 border-black pb-2" : ""
          }`}
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="details"
          className={`relative rounded-none px-4 py-2 focus:outline-none ${
            activeTab === "details" ? "border-b-2 border-black pb-2" : ""
          }`}
        >
          Product Details
        </TabsTrigger>
        <TabsTrigger
          value="review"
          className={`relative rounded-none px-4 py-2 focus:outline-none ${
            activeTab === "review" ? "border-b-2 border-black pb-3" : ""
          }`}
        >
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="flex lg:flex-row flex-col justify-center mt-5"
      >
        <Details></Details>
      </TabsContent>
      <TabsContent
        value="details"
        className="flex lg:flex-row flex-col justify-center"
      >
        <ProductTable></ProductTable>
      </TabsContent>
      <TabsContent
        value="review"
        className="flex lg:flex-row flex-col justify-center"
      >
        <Review></Review>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTab;

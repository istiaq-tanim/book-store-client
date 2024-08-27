import { Button } from "@/components/ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <header
      style={{
        backgroundImage: "url('/block-hero-carousel-1-pattern.cefc31e.jpg')",
        width: "100%",
        height: "500px",
      }}
      className="h-[500px] bg-center flex bg-cover w-full lg:justify-center lg:items-center lg:px-32 p-5 flex-col lg:flex-row"
    >
      <div className="mb-5 w-10/12 max-w-7xl mx-auto space-y-3">
        <div className="space-y-2">
          <p className="text-[#beb4b4] uppercase">The Bookworm Editors’</p>
          <p className="text-5xl font-medium">Featured Books of the</p>
          <p className="text-5xl font-bold">February</p>
        </div>

        <Button className="rounded-none px-10">See More</Button>
      </div>
      <div>
        <Image
          src="/img1-12.png"
          alt="banner"
          width="660"
          height="660"
          className="w-[840px]"
        />
      </div>
    </header>
  );
};

export default Banner;

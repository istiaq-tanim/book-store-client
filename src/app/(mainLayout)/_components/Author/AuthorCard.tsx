import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
interface AuthorCard {
  image: string;
  name: string;
  books: string;
}

export function AuthorCard({ item }: { item: AuthorCard }) {
  return (
    <CarouselItem className="pl-1 lg:basis-1/5">
      <div className="p-1 flex justify-center items-center">
        <Card className="w-64 border border-none">
          <CardContent className="flex flex-col items-center gap-3 justify-center">
            <Image
              className="w-40 h-40 object-cover mx-auto pl-3 rounded-full"
              src={item?.image}
              alt={item?.name}
              width={360}
              height={360}
            />

            <p className="semibold">{item?.name}</p>
            <p className="text-[#7c6e65]">{item?.books}</p>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}

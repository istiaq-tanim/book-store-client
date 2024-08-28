import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import Rating from "@/components/Rating";
import { Button } from "@/components/ui/button";

const Review = ({ book }: { book: BookItem }) => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div className="">
          <div className="grid grid-cols-12 mb-11 justify-center">
            <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px] space-y-5">
              <p>Customers review</p>
              <div className="flex items-center gap-2">
                <p className="text-5xl font-extrabold">{book?.ratings}</p>
                <div>
                  <p>1 Review</p>
                  <Rating value={book?.ratings}></Rating>
                </div>
              </div>
              <Button variant={"outline"} className="px-3 mt-5">
                See All Reviews
              </Button>
            </div>
            <div className="col-span-12 xl:col-span-4 flex items-center">
              <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    {book?.ratings}
                  </p>
                  <p>stars</p>
                  <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span className="h-full w-[100%] rounded-[30px] bg-[#ffbd00] flex"></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mx-[2px]">
                    1
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg py-[1px] text-black mx-[2px]">
                    4
                  </p>
                  <p>stars</p>
                  <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span className="h-full w-[0%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mx-[2px]">
                    0
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg py-[1px] text-black mx-[2px]">
                    3
                  </p>
                  <p>stars</p>
                  <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span className="h-full w-[0%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mx-[2px]">
                    0
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    2
                  </p>
                  <p>stars</p>
                  <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span className="h-full w-[0%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    0
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    1
                  </p>
                  <p>stars</p>
                  <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span className="h-full w-[0%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    0
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
            {book?.reviews.map((review, index) => (
              <>
                <div
                  key={index}
                  className="flex sm:items-center flex-col sm:flex-row justify-between my-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h6 className="font-semibold text-lg leading-2 text-black">
                      {review?.name}
                    </h6>
                    <p className="font-medium text-base leading-4 text-gray-400">
                      {review?.date}
                    </p>
                  </div>
                </div>

                <p className="font-normal text-lg leading-2 text-gray-500 ">
                  {review?.review}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

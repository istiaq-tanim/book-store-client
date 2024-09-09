import Image from "next/image";
import { BookOrder } from "./PaymentList";

const PaymentListItem = ({ product }: { product: BookOrder }) => {
  return (
    <>
      <div className="flex max-lg:flex-col justify-between items-center gap-8 lg:gap-24 px-3 md:px-11">
        <div className="grid grid-cols-4 w-full">
          <div className="col-span-4 sm:col-span-1">
            <Image
              src={product?.image}
              alt="image"
              width={360}
              height={360}
              className="max-sm:mx-auto"
            />
          </div>
          <div className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
            <h6 className="font-manrope font-semibold text-2xl leading-9 text-black mb-3 whitespace-nowrap">
              {product?.name}
            </h6>
            <p className="font-normal text-lg leading-8 text-gray-500 mb-8 whitespace-nowrap">
              By: {product?.author}
            </p>
            <div className="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
              <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                Qty: {product?.quantity}
              </span>
              <p className="font-semibold text-xl leading-8 text-black whitespace-nowrap">
                Price ${product?.price}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around w-full  sm:pl-28 lg:pl:0">
          <div className="flex flex-col justify-center items-start max-sm:items-center">
            <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
              Status
            </p>
            <p
              className={`${
                product?.status === "Pending"
                  ? "text-red-500"
                  : "text-green-500"
              } font-semibold text-lg leading-8  text-left whitespace-nowrap`}
            >
              {product?.status}
            </p>
          </div>
        </div>
      </div>

      <svg
        className="my-9 w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="1216"
        height="2"
        viewBox="0 0 1216 2"
        fill="none"
      >
        <path d="M0 1H1216" stroke="#D1D5DB" />
      </svg>
    </>
  );
};

export default PaymentListItem;

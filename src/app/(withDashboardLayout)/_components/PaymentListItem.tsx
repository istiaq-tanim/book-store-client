import { BookOrder } from "./PaymentList";
import SingleProductItem from "./SingleProductItem";

const PaymentListItem = ({ product }: { product: BookOrder }) => {
  return (
    <>
      <div className="px-3 md:px-11">
        {product?.products?.map((item, index) => (
          <SingleProductItem
            key={index}
            item={item}
            status={product?.deliveryStatus}
          ></SingleProductItem>
        ))}
        <div className="flex items-center justify-around w-full  sm:pl-28 lg:pl:0">
          <div className="flex flex-col justify-center items-start max-sm:items-center">
            <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
              Status
            </p>
            <p
              className={`${
                product?.deliveryStatus === false
                  ? "text-red-500"
                  : "text-green-500"
              } font-semibold text-lg leading-8  text-left whitespace-nowrap`}
            >
              {product?.deliveryStatus ? "Delivered" : "Pending"}
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

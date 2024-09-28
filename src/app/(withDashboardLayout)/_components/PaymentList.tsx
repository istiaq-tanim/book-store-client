import { userInfo } from "@/app/(withoutMainLayout)/action/authAction";
import { generateDateFormat } from "@/app/utils/generateDate";
import Image from "next/image";

export type TProducts = {
  author: string;
  title: string;
  image: string;
  quantity: number;
  price: number;
};
export type BookOrder = {
  _id: string;
  totalPrice: number;
  email: string;
  deliveryStatus: boolean;
  address: string;
  orderDate: string;
  transactionId: string;
  products: TProducts[];
  paidStatus: boolean;
};

const PaymentList = async () => {
  const user = await userInfo();

  const response = await fetch(
    `https://book-store-server-green.vercel.app/payment?email=${user?.email}`
  );
  const { data } = await response.json();
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">Your Orders</h1>
        {data.map((order: BookOrder) => (
          <div
            key={order?._id}
            className="border rounded-lg grid grid-cols-12 justify-center items-center px-10 py-5 mb-8 shadow-md gap-10"
          >
            <div className="col-span-4">
              <span
                className={`${
                  order?.deliveryStatus ? "text-[#059669]" : "text-red-400"
                } bg-[#ECFDF5] mb-10  px-3 py-2 font-bold rounded-full text-xs`}
              >
                {order?.deliveryStatus ? "Delivered" : "Pending"}
              </span>
              <div className="mt-8 space-y-3">
                <div>
                  <p className="text-lg font-semibold text-[#9CA3AF]">
                    Order Number
                  </p>
                  <p className="text-lg font-semibold ">
                    #{order?.transactionId}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#9CA3AF]">
                    Order Date
                  </p>
                  <p className="text-lg font-semibold">
                    {generateDateFormat(order?.orderDate)}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#9CA3AF]">
                    Ship To
                  </p>
                  <p className="text-lg font-semibold">{order?.address}</p>
                </div>
              </div>
              <svg
                className="my-5 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1216"
                height="2"
                viewBox="0 0 1216 2"
                fill="none"
              >
                <path d="M0 1H1216" stroke="#4B5563" />
              </svg>
              <div className="flex gap-2 items-center">
                <p className="text-lg font-bold text-[#9CA3AF]">
                  Total Amount:
                </p>
                <p className="text-lg font-bold">${order?.totalPrice}</p>
              </div>
            </div>
            <div className="col-span-8">
              {order.products.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center">
                    <Image
                      src={item?.image}
                      width={360}
                      height={360}
                      alt={item?.title}
                      className="w-32 h-32 object-cover rounded mr-4"
                    />
                    <div>
                      <p className="text-lg font-bold">{item?.title}</p>
                      <p className="font-semibold">{item?.author}</p>
                      <p className="text-[#9CA3AF] font-semibold">
                        Qty: {item?.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold">${item?.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PaymentList;

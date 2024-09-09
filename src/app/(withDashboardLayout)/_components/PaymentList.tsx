import { userInfo } from "@/app/(withoutMainLayout)/action/authAction";
import PaymentListItem from "./PaymentListItem";
export type BookOrder = {
  _id: string;
  price: number;
  email: string;
  status: "Delivered" | "Pending";
  name: string;
  author: string;
  image: string;
  quantity: number;
};

const PaymentList = async () => {
  const user = await userInfo();

  const response = await fetch(
    `https://book-store-server-green.vercel.app/payment?email=${user?.email}`
  );
  const { data } = await response.json();
  return (
    <>
      <section className="pt-10 pb-20 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-manrope font-extrabold text-3xl lead-10 text-black mb-9">
            Order History
          </h2>

          <div className="mt-7 border border-gray-300 pt-9">
            <div className="flex max-md:flex-col items-center justify-between px-3 md:px-11">
              <div className="data">
                <p className="font-medium text-lg leading-8 text-black whitespace-nowrap">
                  Order : #10234987
                </p>
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

            {data.map((item: BookOrder) => (
              <PaymentListItem key={item?._id} product={item}></PaymentListItem>
            ))}
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default PaymentList;

import { userInfo } from "@/app/(withoutMainLayout)/action/authAction";
import Image from "next/image";

const UserDashboardPage = async () => {
  const user = await userInfo();
  const response = await fetch(
    `https://book-store-server-green.vercel.app/statistic?email=${user?.email}`
  );
  const result = await response.json();
  console.log(result);
  return (
    <div className="p-20">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-500 to-blue-200 text-white shadow-blue-400/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <Image
              alt="document"
              src="/wallet.png"
              width={36}
              height={36}
            ></Image>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Total Transactions
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              $
              {result?.data[0]?.totalPayment
                ? result?.data[0]?.totalPayment
                : 0}
            </h4>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-purple-600 to-purple-400 text-white shadow-purple-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <Image
              alt="document"
              src="/document.png"
              width={36}
              height={36}
            ></Image>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Pending Orders
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {result?.data[0]?.pendingOrders
                ? result?.data[0]?.pendingOrders
                : 0}
            </h4>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <Image
              alt="document"
              src="/transaction.png"
              width={36}
              height={36}
            ></Image>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Delivered Orders
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {result?.data[0]?.deliveryOrders
                ? result?.data[0]?.deliveryOrders
                : 0}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;

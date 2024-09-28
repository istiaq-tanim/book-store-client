import OrderTableList from "@/app/(withDashboardLayout)/_components/OrderTableList";
import { BookOrder } from "@/app/(withDashboardLayout)/_components/PaymentList";

const ManageOrderPage = async () => {
  const response = await fetch("http://localhost:5000/orders");
  const orders = await response.json();
  return (
    <div>
      <div className="flex flex-col">
        <div className=" overflow-x-auto pb-4">
          <div className="min-w-full inline-block align-middle mt-20">
            <div className="overflow-hidden  border rounded-lg border-gray-300">
              <table className="table-auto min-w-full rounded-xl p-10">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Transaction ID{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"
                    >
                      {" "}
                      Email{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Order Date{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Status{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Grand Total{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Payment Status{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Adress{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Actions{" "}
                    </th>
                  </tr>
                </thead>
                {orders?.data.map((order: BookOrder) => (
                  <OrderTableList
                    order={order}
                    key={order?._id}
                  ></OrderTableList>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrderPage;

import { generateDateFormat } from "@/app/utils/generateDate";

import { OrderAction } from "./OrderAction";
import { BookOrder } from "./PaymentList";

const OrderTableList = ({ order }: { order: BookOrder }) => {
  return (
    <tbody className="divide-y divide-gray-300 ">
      <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
          {order?.transactionId}
        </td>
        <td className=" px-5 py-3">
          <div className="w-48 flex items-center gap-3">
            <p className="font-normal text-xs leading-5 text-gray-400">
              {" "}
              {order?.email}
            </p>
          </div>
        </td>
        <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
          {" "}
          {generateDateFormat(order?.orderDate)}
        </td>
        <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
          {" "}
          <span
            className={`${
              order?.deliveryStatus ? "text-[#059669]" : "text-red-400"
            } bg-[#ECFDF5] px-3 py-2 font-bold rounded-lg text-xs`}
          >
            {order?.deliveryStatus ? "Delivered" : "Pending"}
          </span>
        </td>
        <td className="p-3 whitespace-nowrap tex-center text-sm leading-6 font-medium text-gray-900">
          {" "}
          ${order?.totalPrice}
        </td>
        <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
          {" "}
          {order?.paidStatus ? "Paid" : "Pending"}
        </td>
        <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
          {" "}
          {order?.address}
        </td>

        <td className="flex p-3 items-center gap-0.5">
          <OrderAction
            orderId={order?._id}
            initialStatus={order?.deliveryStatus}
          ></OrderAction>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderTableList;

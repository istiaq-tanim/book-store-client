import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import AllBookRow from "./AllBookRow";

const AllProducts = async () => {
  const response = await fetch(
    "https://book-store-server-green.vercel.app/books",
    {
      cache: "no-store",
    }
  );
  const products = await response.json();
  return (
    <div className="overflow-auto font-[sans-serif]">
      <h3 className="p-5 font-bold text-xl text-center">Manage Books</h3>
      <table className="min-w-full bg-white mt-5">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Product
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Price
            </th>
            <th className="p-4 text-center text-sm font-semibold text-black">
              Format
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Rating
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap divide-y divide-gray-200">
          {products?.data?.map((product: BookItem) => (
            <AllBookRow key={product?._id} product={product}></AllBookRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;

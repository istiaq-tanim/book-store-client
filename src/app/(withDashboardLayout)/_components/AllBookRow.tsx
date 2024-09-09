import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import Format from "@/components/Format";
import Rating from "@/components/Rating";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import { EditModal } from "./EditModal";

const AllBookRow = ({ product }: { product: BookItem }) => {
  return (
    <>
      <tr>
        <td className="p-4 text-sm">
          <div className="flex items-center cursor-pointer">
            <Image
              src={product?.image}
              className="w-10 h-10 p-1.5 shrink-0 bg-gray-100"
              alt="product"
              width={360}
              height={360}
            />
            <div className="mx-4">
              <p className="text-sm text-black">{product?.title}</p>
            </div>
          </div>
        </td>
        <td className="p-4 text-sm">
          ${product?.price ? product?.price : product?.originalPrice}
        </td>
        <td className="text-sm">
          <Format format={product?.format}></Format>
        </td>
        <td className="py-6 px-4 text-sm flex items-center">
          <Rating value={product?.ratings}></Rating>
        </td>

        <td className="p-4">
          <EditModal id={product?._id}></EditModal>
          <DeleteButton id={product?._id}></DeleteButton>
        </td>
      </tr>
    </>
  );
};

export default AllBookRow;

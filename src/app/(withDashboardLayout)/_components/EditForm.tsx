"use client";
import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import { editProduct } from "@/app/services/actions/productAction";
import { BookInputs } from "@/app/types/common";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const EditForm = ({
  id,
  closeModal,
}: {
  id: string;
  closeModal: () => void;
}) => {
  const [book, setBook] = useState<BookItem | null>(null);
  const { register, handleSubmit, reset, setValue } = useForm<BookInputs>();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(
        `https://book-store-server-green.vercel.app/books/${id}`
      );
      const data = await response.json();
      setBook(data?.data);

      if (data?.data) {
        setValue("title", data.data.title);
        setValue("author", data.data.author);
        setValue("originalPrice", data.data.originalPrice);
        setValue("saleNumber", data.data.saleNumber);
        setValue("rating", data.data.ratings);
        setValue("image", data.data.image);
        setValue("description", data.data.description);
        setValue("category", data.data.category);
        setValue("format", data.data.format.join(", "));
      }
    };
    fetchBook();
  }, [id, setValue]);

  const onSubmit: SubmitHandler<BookInputs> = async (data) => {
    const featuresArray = data?.format?.split(",").map((item) => item.trim());

    const updateBook = {
      title: data?.title ?? "",
      ratings: Number(data?.rating) || 0,
      originalPrice: Number(data?.originalPrice) || 0,
      format: featuresArray ?? [],
      image: data?.image ?? "",
      description: data?.description ?? "",
      category: data?.category ?? "",
      author: data?.author ?? "",
      onSale: false,
      featured: false,
      saleNumber: Number(data?.saleNumber) || 0,
    };
    try {
      const response = await editProduct(updateBook, book?._id as string);
      if (response?.success) {
        toast.success(response?.message);
        reset();
        closeModal();
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-[sans-serif] m-6 w-full mx-auto"
      >
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              {...register("title", { required: true })}
              defaultValue={book?.title}
              className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Author
            </label>
            <input
              type="text"
              placeholder="Author Name"
              {...register("author", { required: true })}
              defaultValue={book?.author}
              className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter the price"
              {...register("originalPrice", { required: true })}
              defaultValue={book?.price}
              className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Stock Book
            </label>
            <input
              type="number"
              placeholder="Enter the price"
              {...register("saleNumber", { required: true })}
              defaultValue={book?.saleNumber}
              className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Rating
            </label>
            <input
              type="number"
              {...register("rating", { required: true })}
              defaultValue={book?.ratings}
              placeholder="Enter Rating"
              className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Image
            </label>
            <input
              type="text"
              placeholder="Enter Image URL"
              {...register("image", { required: true })}
              defaultValue={book?.image}
              className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Description
            </label>
            <textarea
              placeholder="Enter the description"
              {...register("description", { required: true })}
              defaultValue={book?.description}
              className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Category
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue={book?.category}
              className="select select-bordered px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            >
              <option disabled>Please select a category</option>
              <option value="Fiction">Fiction</option>
              <option value="science">Science</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="mystery">Mystery</option>
              <option value="arts">Arts</option>
              <option value="biography">Biography</option>
              <option value="romance">Romance</option>
            </select>
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Format
            </label>
            <input
              type="text"
              {...register("format", { required: true })}
              defaultValue={book?.format}
              placeholder="Please add Book Format with comma separator"
              className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 px-6 py-2.5 w-full text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default EditForm;

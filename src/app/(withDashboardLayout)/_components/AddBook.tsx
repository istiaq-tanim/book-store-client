"use client";

import { addProduct } from "@/app/services/actions/productAction";
import { BookInputs } from "@/app/types/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm<BookInputs>();
  const onSubmit: SubmitHandler<BookInputs> = async (data) => {
    const featuresArray = data?.format?.split(",").map((item) => item.trim());

    const book = {
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
      const response = await addProduct(book);
      if (response?.success) {
        toast.success(response?.message);
        reset();
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-[sans-serif] m-6 max-w-4xl mx-auto"
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
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>
        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          >
            <option disabled selected>
              Please select a category
            </option>
            <option value="fiction">Fiction</option>
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
  );
};

export default AddProduct;

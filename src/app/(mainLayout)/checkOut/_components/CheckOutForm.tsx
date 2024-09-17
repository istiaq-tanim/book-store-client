"use client";
import { getTotal } from "@/app/redux/features/cart/cartSlice";
import { RootState } from "@/app/redux/store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BookItem } from "../../_components/BookCardList/BookCardList";

type TInput = {
  email: string;
  name: string;
  contact: string;
  address: string;
  total: number;
  currency: string;
  orderProducts: BookItem[];
};

const CheckOutForm = ({ user }: { user: string }) => {
  const { register, handleSubmit, setValue } = useForm<TInput>();

  const { items } = useSelector((state: RootState) => state.cart);
  const onSubmit: SubmitHandler<TInput> = async (data) => {
    const orderItem = {
      email: data?.email,
      name: data?.name,
      contact: data?.contact,
      address: data?.address,
      total: Number(data?.total),
      currency: data.currency,
      orderProducts: items,
    };

    try {
      const response = await fetch(
        "https://book-store-server-green.vercel.app/order",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(orderItem),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      const result = await response.json();
      window.location.replace(result?.url);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Name of card holder"
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
          />
        </div>
        <div>
          <input
            type="string"
            {...register("contact", { required: true })}
            placeholder="Contact Number"
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            defaultValue={user}
            className="col-span-full px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            {...register("address", { required: true })}
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Total"
            defaultValue={cart.totalAmount + 10}
            {...register("total", { required: true })}
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
          />
        </div>

        <Select
          onValueChange={(value) => {
            setValue("currency", value);
          }}
        >
          <SelectTrigger className="px-4 py-6 bg-white text-gray-800 w-full text-sm border rounded-md outline-none">
            <SelectValue placeholder="Select Currency" />
          </SelectTrigger>
          <SelectContent {...register("currency", { required: true })}>
            <SelectGroup>
              <SelectItem value="BDT">BDT</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <button
          type="submit"
          className="px-7 py-3.5 text-sm tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;

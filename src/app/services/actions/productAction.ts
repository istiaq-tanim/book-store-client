"use server"

import { revalidatePath } from "next/cache"

export const deleteBook = async (id: string) => {
      const response = await fetch(`https://book-store-server-green.vercel.app/book/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
      })
      revalidatePath("/dashboard/admin/books")
      return response.json()
}

export type TSaveBook = {
      title: string,
      ratings: number,
      originalPrice: number,
      format: string[],
      image: string,
      description: string,
      category: string,
      author: string,
      onSale: boolean,
      featured: boolean,
      saleNumber: number,
}

export const addProduct = async (product: TSaveBook) => {
      const response = await fetch("https://book-store-server-green.vercel.app/addBook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
            cache: "no-store"
      })
      revalidatePath("/dashboard/admin/books")
      const result = response.json()
      return result
}

export const editProduct = async (product: TSaveBook, id: string) => {
      const response = await fetch(`https://book-store-server-green.vercel.app/book/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
            cache: "no-store"
      })
      revalidatePath("/dashboard/admin/books")
      const result = response.json()
      return result
} 
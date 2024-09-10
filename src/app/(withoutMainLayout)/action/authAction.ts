"use server"

import { jwtDecode } from 'jwt-decode';
import { cookies } from "next/headers";

export const signUpUser = async (pre: FormData, formData: FormData) => {
      try {
            const formattedData = JSON.stringify(Object.fromEntries(formData))
            const res = await fetch("http://localhost:5000/register", {
                  method: "POST",
                  headers: {
                        "Content-type": "application/json"
                  },
                  body: formattedData
            })
            const data = await res.json()
            return data
      } catch (error) {
            throw (error)
      }
}

export const logInUser = async (pre: FormData, formData: FormData) => {
      try {
            const formattedData = JSON.stringify(Object.fromEntries(formData))
            const res = await fetch("http://localhost:5000/login", {
                  method: "POST",
                  headers: {
                        "Content-type": "application/json"
                  },
                  body: formattedData
            })
            const data = await res.json()
            const { success, message } = data
            if (data.success) {
                  cookies().set("accessToken", data.token)
                  return { success, message }
            }
            return data
      } catch (error) {
            throw (error)
      }
}

export const userInfo = async () => {
      try {

            const accessToken = cookies().get("accessToken")?.value
            if (accessToken) {
                  let decodedData = null
                  decodedData = await jwtDecode(accessToken) as any
                  return { email: decodedData?.email, role: decodedData?.role }
            } else {
                  return null
            }

      } catch (error) {
            throw (error)
      }
}

export const logOut = async () => {
      try {
            cookies().delete("accessToken")
      } catch (error) {
            throw (error)
      }
}
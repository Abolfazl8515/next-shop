"use server";
import { deleteOneProductApi } from "@/services/productsService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export default async function deleteProduct(prevState, { postId }) {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  try {
    const { message } = await deleteOneProductApi(postId, options);
    return {
      error: "",
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      message: "",
      error,
    };
  }
}

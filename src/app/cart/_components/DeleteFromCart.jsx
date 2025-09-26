"use client";
import { useAuth } from "@/context/AuthProvider";
import { deleteFromCartApi } from "@/services/cartService";
import { TrashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

function DeleteFromCart({ productId }) {
  const { getUser } = useAuth();
  const deleteHandler = async () => {
    try {
      const { message } = await deleteFromCartApi({ productId });
      toast.success(message);
      getUser();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <TrashIcon
      onClick={deleteHandler}
      className="w-5 h-5 text-red-300 cursor-pointer"
    />
  );
}

export default DeleteFromCart;

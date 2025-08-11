"use client";
import { useAuth } from "@/context/AuthProvider";
import { addToCartApi } from "@/services/cartService";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function AddToCart({ id }) {
  const { user } = useAuth();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const addToCartHandler = async () => {
    if (!user) {
      toast.error("لطفا وارد حساب کاربری خود شوید");
      push("/auth");
      return;
    }

    try {
      setLoading(true);
      const { message } = await addToCartApi({ productId: id });
      toast.success(message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="text-[13px] w-1/2"
      variant="primary"
      onClick={addToCartHandler}
    >
      {loading ? <SpinnerMini /> : "افزودن به سبد خرید"}
    </Button>
  );
}

export default AddToCart;

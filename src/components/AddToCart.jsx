"use client";
import { useAuth } from "@/context/AuthProvider";
import { addToCartApi, deleteFromCartApi } from "@/services/cartService";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function AddToCart({ id, className }) {
  const { user, getUser, cart } = useAuth();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const selectedProduct = cart?.productDetail?.find(
    (product) => String(product._id) === String(id)
  );

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
      getUser();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const decreaseHandler = async () => {
    try {
      const { message } = await deleteFromCartApi({ productId: id });
      toast.success(message);
      getUser();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return selectedProduct?.quantity > 0 ? (
    <div className="flex items-center gap-2">
      <Button
        variant="danger"
        className="h-8 flex justify-center items-center"
        onClick={decreaseHandler}
      >
        -
      </Button>
      <span>{selectedProduct?.quantity}</span>
      <Button
        variant="primary"
        className="h-8 flex justify-center items-center"
        onClick={addToCartHandler}
      >
        +
      </Button>
    </div>
  ) : (
    <Button className={className} variant="primary" onClick={addToCartHandler}>
      {loading ? <SpinnerMini /> : "افزودن به سبد خرید"}
    </Button>
  );
}

export default AddToCart;

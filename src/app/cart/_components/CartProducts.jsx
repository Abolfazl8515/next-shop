"use client";
import CoverImage from "@/components/CoverImage";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Link from "next/link";
import DeleteFromCart from "./DeleteFromCart";
import Button from "@/ui/Button";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthProvider";
import { addToCartApi, deleteFromCartApi } from "@/services/cartService";

function CartProducts({ products }) {
  const { getUser } = useAuth();

  const addToCartHandler = async (productId) => {
    try {
      const { message } = await addToCartApi({ productId });
      toast.success(message);
      getUser();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const decreaseHandler = async (productId) => {
    try {
      const { message } = await deleteFromCartApi({ productId });
      toast.success(message);
      getUser();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-1">
      {products?.map((product) => (
        <div key={product._id} className="flex justify-around items-center">
          <div className="w-1/3">
            <CoverImage priority={true} {...product} />
          </div>
          <div className="w-1/3">
            <Link href={`/products/${product.slug}`} className="text-center">
              <h2 className="text-secondary-700 font-black text-[18px] hover:text-primary-900 transition-all ease-out">
                {product.title}
              </h2>
              <p className="text-secondary-700 mt-2 hover:text-primary-900 transition-all ease-out">
                تعداد: {toPersianNumbers(product.quantity)} عدد
              </p>
            </Link>
          </div>
          <div className="w-1/3 flex gap-x-5 items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-x-1">
                <span className="text-xl font-black text-primary-700">
                  {toPersianNumbersWithComma(product.price)}
                </span>
                <span className="text-secondary-400">تومان</span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="danger"
                  className="h-8 flex justify-center items-center"
                  onClick={() => decreaseHandler(product._id)}
                >
                  -
                </Button>
                <span>{product.quantity}</span>
                <Button
                  variant="primary"
                  className="h-8 flex justify-center items-center"
                  onClick={() => addToCartHandler(product._id)}
                >
                  +
                </Button>
              </div>
            </div>
            <DeleteFromCart productId={product._id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProducts;

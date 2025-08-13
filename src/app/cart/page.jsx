"use client";
import { useAuth } from "@/context/AuthProvider";
import CartProducts from "./_components/CartProducts";
import Spinner from "@/ui/Loading";
import CartSummary from "./_components/CartSummary";

function CartPage() {
  const { cart, isLoading } = useAuth();

  return (
    <main className="xl:max-w-screen-lg w-11/12 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h3 className="text-2xl font-black">سبد خرید شما</h3>
      </div>
      <div className="grid grid-cols-12 sm:gap-8 gap-4 mt-10">
        <div className="col-span-12 lg:col-span-8 xl:col-span-7">
          {isLoading ? (
            <Spinner />
          ) : (
            <CartProducts products={cart?.productDetail} />
          )}
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-5">
          {isLoading ? (
            <Spinner />
          ) : (
            <CartSummary payDetail={cart?.payDetail} />
          )}
        </div>
      </div>
    </main>
  );
}

export default CartPage;

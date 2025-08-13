import CoverImage from "@/components/CoverImage";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function CartProducts({ products }) {
  return (
    <div className="w-full flex flex-col gap-y-1">
      {products?.map((product) => (
        <div key={product._id} className="flex justify-around items-center">
          <div className="w-[200px]">
            <CoverImage priority={true} {...product} />
          </div>
          <div>
            <Link href={`/products/${product.slug}`} className="text-center">
              <h2 className="text-secondary-700 font-black text-2xl hover:text-primary-900 transition-all ease-out">
                {product.title}
              </h2>
              <p className="text-secondary-700 mt-2 hover:text-primary-900 transition-all ease-out">
                تعداد: {toPersianNumbers(product.quantity)} عدد
              </p>
            </Link>
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="flex items-center gap-x-1">
              <span className="text-xl font-black text-primary-700">
                {toPersianNumbersWithComma(product.price)}
              </span>
              <span className="text-secondary-400">تومان</span>
            </div>
            <TrashIcon className="w-5 h-5 text-red-300 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProducts;

import CoverImage from "./CoverImage";
import Link from "next/link";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import AddToCart from "./AddToCart";

function ProductList({ products }) {
  return products?.map((product) => (
    <div key={product._id} className="w-2/5">
      <Link href={`/products/${product.slug}`}>
        <CoverImage {...product} priority={true} />
      </Link>
      <div>
        <Link href={`/products/${product.slug}`}>
          <h2 className="mb-1 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
            {product.title}
          </h2>
        </Link>
        <Link href={`/products/${product.slug}`}>
          <h4 className="my-4 flex items-center gap-x-1 font-bold text-primary-700 hover:text-primary-900 transition-all ease-out">
            <span>مشاهده جزئیات محصول</span>
            <ArrowLongLeftIcon className="w-5 h-5" />
          </h4>
        </Link>
        <div className="w-full flex justify-between items-center">
          <AddToCart id={product._id} className="w-1/2 text-[13px]" />
          <div className="flex items-center gap-x-1">
            <span className="text-xl font-black text-secondary-700">
              {toPersianNumbersWithComma(product.price)}
            </span>
            <span className="text-secondary-400">تومان</span>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default ProductList;

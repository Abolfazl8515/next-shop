import AddToCart from "@/components/AddToCart";
import CoverImage from "@/components/CoverImage";
import {
  getOneProductBySlugApi,
  getProductsApi,
} from "@/services/productsService";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

export async function generateStaticParams() {
  const { products } = await getProductsApi();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const { product } = await getOneProductBySlugApi(slug);
  console.log(product);

  return (
    <main className="w-10/12 mt-10 h-auto">
      <div className="flex justify-between items-center h-96">
        <div className="w-[518px]">
          <CoverImage priority={true} {...product} />
        </div>
        <div>
          <h1 className="font-black text-4xl text-secondary-700">
            {product.title}
          </h1>
        </div>
        <div>
          <div className="w-full flex flex-col gap-y-3">
            <div className="flex justify-between">
              <p className="text-secondary-700">دسته بندی</p>
              <p className="text-secondary-700">{product.category.title}</p>
            </div>
            <div className="flex justify-between items-center gap-x-1">
              <p>قیمت</p>
              <div>
                <span className="text-xl font-black text-primary-700">
                  {toPersianNumbersWithComma(product.price)}
                </span>
                <span className="text-secondary-400">تومان</span>
              </div>
            </div>
            <AddToCart id={product._id} className="w-full text-2xl p-3" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-secondary-800 text-2xl">
          توضیحات محصول:
        </h3>
        <p className="text-secondary-700 mt-3">{product.description}</p>
      </div>
    </main>
  );
}

export default ProductDetailPage;

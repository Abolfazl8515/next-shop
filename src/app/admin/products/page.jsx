import { Suspense } from "react";
import ProductsHeader from "./_components/ProductsHeader";
import Spinner from "@/ui/Loading";
import { getProductsApi } from "@/services/productsService";
import LatestProducts from "./_components/LatestProducts";

async function ProductsPage({ searchParams }) {
  const search = await searchParams;
  const sort = search.sort;
  const query = sort ? `sort=${sort}` : "sort=latest";

  const { products } = await getProductsApi(query);
  if (products.length === 0) {
    return (
      <>
        <ProductsHeader />
        <p className="text-secondary-500">محصولی وجود ندارد</p>
      </>
    );
  }

  return (
    <div>
      <ProductsHeader />
      <Suspense fallback={<Spinner />}>
        <LatestProducts products={products} />
      </Suspense>
    </div>
  );
}

export default ProductsPage;

import ProductList from "@/components/ProductList";
import { getProductsApi } from "@/services/productsService";
import Empty from "@/ui/Empty";

async function ProductsPage({ searchParams }) {
  const search = await searchParams;
  const category = search.category;
  const query = category ? `category=${category}` : "";
  const { products } = await getProductsApi(query);

  if (products.length === 0) {
    return <Empty message="محصولی وجود ندارد" />;
  }

  return (
    <div className="w-full h-auto flex flex-wrap gap-1">
      <ProductList products={products} />
    </div>
  );
}

export default ProductsPage;

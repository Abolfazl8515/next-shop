import Breadcrumbs from "@/ui/Breadcrumbs";
import { getCategories } from "@/services/categoryService";
import CreateProductForm from "../../_components/CreateProductForm";
import { getOneProductByIdApi } from "@/services/productsService";

export const dynamic = "force-dynamic";

async function EditProduct({ params }) {
  const { productId } = await params;
  const { product } = await getOneProductByIdApi(productId);
  const { categories } = await getCategories();

  return (
    <div>
      <Breadcrumbs
        Breadcrumbs={[
          { label: "محصولات", href: "/admin/products" },
          {
            label: "ویرایش محصول",
            href: `/admin/products/${productId}/edit`,
            active: true,
          },
        ]}
      />
      <CreateProductForm categories={categories} productToEdit={product} />
    </div>
  );
}

export default EditProduct;

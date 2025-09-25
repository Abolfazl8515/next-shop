import Breadcrumbs from "@/ui/Breadcrumbs";
import { getCategories } from "@/services/categoryService";
import CreateProductForm from "../_components/CreateProductForm";

export const dynamic = "force-dynamic";

async function CreateProduct() {
  const { categories } = await getCategories();
  return (
    <div>
      <Breadcrumbs
        Breadcrumbs={[
          { label: "محصولات", href: "/admin/products" },
          {
            label: "اضافه کردن محصول",
            href: `/admin/products/create`,
            active: true,
          },
        ]}
      />
      <CreateProductForm categories={categories} />
    </div>
  );
}

export default CreateProduct;

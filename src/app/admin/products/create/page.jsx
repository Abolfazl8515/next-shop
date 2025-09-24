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
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "اضافه کردن پست",
            href: `/profile/posts/create`,
            active: true,
          },
        ]}
      />
      <CreateProductForm categories={categories} />
    </div>
  );
}

export default CreateProduct;

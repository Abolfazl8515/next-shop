import { getCategoryByIdApi } from "@/services/categoryService";
import CreateCategoryForm from "../../_components/CreateCategoryForm";
import Breadcrumbs from "@/ui/Breadcrumbs";

async function EditCategoryPage({ params }) {
  const { categoryId } = await params;
  const { category } = await getCategoryByIdApi(categoryId);

  return (
    <div>
      <Breadcrumbs
        Breadcrumbs={[
          { label: "دسته بندی ها", href: "/admin/categories" },
          {
            label: " ویرایش دسته بندی ",
            href: `/admin/categories/${categoryId}/edit`,
            active: true,
          },
        ]}
      />
      <CreateCategoryForm categoryToEdit={category} />
    </div>
  );
}

export default EditCategoryPage;

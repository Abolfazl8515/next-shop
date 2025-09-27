import Breadcrumbs from "@/ui/Breadcrumbs";
import CreateCategoryForm from "../_components/CreateCategoryForm";

function CreateCategoryPage() {
  return (
    <div>
      <Breadcrumbs
        Breadcrumbs={[
          { label: "دسته بندی ها", href: "/admin/categories" },
          {
            label: "اضافه کردن دسته بندی",
            href: `/admin/categories/create`,
            active: true,
          },
        ]}
      />
      <CreateCategoryForm />
    </div>
  );
}

export default CreateCategoryPage;

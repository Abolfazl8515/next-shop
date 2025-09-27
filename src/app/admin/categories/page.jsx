import { getCategories } from "@/services/categoryService";
import Spinner from "@/ui/Loading";
import { Suspense } from "react";
import CategoriesHeader from "./_components/CategoriesHeader";
import LatestCategories from "./_components/LatestCategories";

async function CategoriesPage() {
  const { categories } = await getCategories();

  if (categories.length === 0) {
    return (
      <>
        <CategoriesHeader />
        <p className="text-secondary-500">دسته بندی ایی وجود ندارد</p>
      </>
    );
  }

  return (
    <div>
      <CategoriesHeader />
      <Suspense fallback={<Spinner />}>
        <LatestCategories categories={categories} />
      </Suspense>
    </div>
  );
}

export default CategoriesPage;
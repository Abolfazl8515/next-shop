import CategoryList from "../_components/CategoryList";
import { getCategories } from "@/services/categoryService";

export const metadata = {
  title: "لیست محصولات",
  description: "لیست محصولات",
};

async function ProductsLayout({ children }) {
  const { categories } = await getCategories();
  return (
    <div className="xl:max-w-screen-lg w-11/12 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h3 className="text-2xl font-black">لیست تمام محصولات</h3>
      </div>
      <div className="grid grid-cols-12 sm:gap-8 gap-4 mt-10">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="lg:block hidden">
            <CategoryList categories={categories} />
          </div>
        </div>
        <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </main>
      </div>
    </div>
  );
}

export default ProductsLayout;

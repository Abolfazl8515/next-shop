import { getUsersApi } from "@/services/adminService";
import { getCategories } from "@/services/categoryService";
import { getProductsApi } from "@/services/productsService";
import Spinner from "@/ui/Loading";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import {
  DocumentDuplicateIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { cookies } from "next/headers";
import { Suspense } from "react";

async function AdminPage() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { users } = await getUsersApi(options);
  const { categories } = await getCategories(options);
  const { products } = await getProductsApi(options);

  const dashboardList = [
    {
      id: 1,
      title: "کاربران",
      num: users.length,
      icon: <UsersIcon className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "محصولات",
      num: products.length,
      icon: <ShoppingBagIcon className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "دسته بندی ها",
      num: categories.length,
      icon: <DocumentDuplicateIcon className="w-4 h-4" />,
    },
  ];

  return dashboardList.map((item) => (
    <Suspense key={item.id} fallback={<Spinner />}>
      <div className="lg:w-1/3 w-11/12 h-28 flex flex-col gap-y-2 p-2 bg-secondary-200 rounded-md">
        <h5 className="w-full font-bold text-secondary-700 text-base flex items-center gap-x-2">
          {item.icon}
          <span>{item.title}</span>
        </h5>
        <div className="w-full h-4/5 bg-secondary-300 rounded-lg">
          <p className="w-full h-full flex justify-center items-center text-secondary-700 text-2xl">
            {toPersianNumbers(item.num)}
          </p>
        </div>
      </div>
    </Suspense>
  ));
}

export default AdminPage;

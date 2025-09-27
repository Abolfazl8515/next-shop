import ProfileHeader from "@/components/ProfileHeader";
import SideBar from "@/components/SideBar";
import {
  BuildingStorefrontIcon,
  RectangleGroupIcon,
  TagIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const options = [
  {
    id: 1,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/admin",
  },
  {
    id: 2,
    title: "محصولات",
    icon: <BuildingStorefrontIcon className="w-5 h-5" />,
    href: "/admin/products",
  },
  {
    id: 3,
    title: "دسته بندی ها",
    icon: <TagIcon className="w-5 h-5" />,
    href: "/admin/categories",
  },
  {
    id: 4,
    title: "کاربران",
    icon: <UsersIcon className="w-5 h-5" />,
    href: "/admin/users",
  },
];

function AdminLayout({ children }) {
  return (
    <div className="w-11/12 bg-secondary-200">
      <div className="w-full grid grid-cols-12 overflow-hidden py-3 gap-3 h-screen">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 lg:block h-11/12 bg-primary-500 rounded-2xl">
          <SideBar options={options} />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          <div>
            <ProfileHeader />
          </div>
          <main className="bg-secondary-100 p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;

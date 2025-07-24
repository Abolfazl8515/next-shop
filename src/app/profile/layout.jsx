import ProfileHeader from "@/components/ProfileHeader";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

function ProfileLayout({ children }) {
  return (
    <div className="w-11/12 bg-secondary-200">
      <div className="w-full grid grid-cols-12 overflow-hidden py-3 gap-3 h-screen">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 lg:block h-11/12 bg-primary-500 rounded-2xl">
          <SideBar />
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

export default ProfileLayout;

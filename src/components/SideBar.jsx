"use client";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import SideBarNav from "./SideBarNav";

function SideBar({ options }) {
  const { logout } = useAuth();

  return (
    <div className="lg:overflow-y-auto overflow-hidden flex flex-col p-5 h-screen pt-10 lg:pt-8">
      <Link
        href="/"
        className="flex items-center gap-x-4 justify-center text-secondary-700 border-b  border-b-secondary-200
        pb-2 mb-6"
      >
        <HomeIcon className="w-6 h-6" />
        <span> خانه </span>
      </Link>
      <div className="overflow-y-auto flex-auto">
        <SideBarNav options={options} />
        <div
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-300 cursor-pointer"
          onClick={() => logout()}
        >
          <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;

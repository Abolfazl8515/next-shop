"use client";
import { useAuth } from "@/context/AuthProvider";
import NavLink from "./NavLink";
import ButtonIcon from "@/ui/ButtonIcon";
import { UserIcon } from "@heroicons/react/24/outline";

function Header() {
  const { user } = useAuth();
  return (
    <div className="w-3/4 h-16 mx-auto my-2 p-3 bg-primary-700 rounded-3xl">
      <ul className="flex justify-between items-center px-1">
        <div className="w-1/2 flex justify-around">
          <li>
            <NavLink path="/" active="bg-primary-600 rounded-[28px]">
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink path="/products" active="bg-primary-400">
              محصولات
            </NavLink>
          </li>
          <li>
            <NavLink path="/about" active="bg-primary-400">
              درباره ما
            </NavLink>
          </li>
        </div>
        <div className="w-1/2 flex justify-end">
          <li>
            {user ? (
              <NavLink path="/profile">
                <ButtonIcon variant="primary" className="cursor-pointer">
                  پروفایل کاربری
                  <UserIcon />
                </ButtonIcon>
              </NavLink>
            ) : (
              <NavLink path="/auth" active="bg-primary-400">
                ورود | ثبت نام
              </NavLink>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;

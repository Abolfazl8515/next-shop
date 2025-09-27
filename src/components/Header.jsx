"use client";
import { useAuth } from "@/context/AuthProvider";
import NavLink from "./NavLink";
import ButtonIcon from "@/ui/ButtonIcon";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

function Header() {
  const { user, cart, isLoading } = useAuth();
  const profilePath = user?.role === "ADMIN" ? "/admin" : "/profile";
  return (
    <div className="w-3/4 h-16 mx-auto my-2 p-3 bg-primary-500 rounded-3xl">
      <ul className="flex justify-between items-center px-1">
        <div className="w-1/2 flex justify-around">
          <li>
            <NavLink path="/" active="bg-primary-600 rounded-[28px]">
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink path="/products" active="bg-primary-600 rounded-[28px]">
              محصولات
            </NavLink>
          </li>
          <li>
            <NavLink path="/about" active="bg-primary-600 rounded-[28px]">
              درباره ما
            </NavLink>
          </li>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <li className="relative">
            <NavLink path="/cart">
              <span className="absolute w-5 h-5 flex justify-center items-center rounded-full -top-1 -right-2 bg-rose-500 text-secondary-50">
                {!isLoading && toPersianNumbers(cart?.productDetail.length)}
              </span>
              <ShoppingCartIcon className="w-6 h-6 text-secondary-50" />
            </NavLink>
          </li>
          <li>
            {user ? (
              <NavLink path={profilePath}>
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

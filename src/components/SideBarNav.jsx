"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBarNav({ options }) {
  const pathname = usePathname();
  return (
    <ul className="space-y-2">
      {options.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-4",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SideBarNav;

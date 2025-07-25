"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children, active = "text-primary-800" }) {
  const pathname = usePathname();

  return (
    <Link
      className={`block p-2 transition-all ease-out text-secondary-800
        ${pathname === path && active}
      `}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;

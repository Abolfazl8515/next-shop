"use client";
import CheckBox from "@/ui/CheckBox";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function CategoryList({ categories }) {
  const searchParams = useSearchParams();
  const defaultValues = searchParams.getAll("category")[0]?.split(",");
  const [selectedCategories, setSelectedCategories] = useState(
    defaultValues || []
  );
  const pathName = usePathname();
  const { replace } = useRouter();

  const changeHandler = (e) => {
    const value = e.target.value;
    const search = new URLSearchParams(searchParams);
    if (selectedCategories.includes(value)) {
      const filteredCategories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(filteredCategories);
      search.set("category", filteredCategories);
    } else {
      setSelectedCategories([...selectedCategories, value]);
      search.set("category", [...selectedCategories, value]);
    }
    replace(`${pathName}?${search.toString()}`);
  };

  return (
    <ul className="space-y-3 flex items-center justify-center flex-col">
      <li className="text-secondary-700">
        <Link href="/blogs" className="w-full h-full">
          همه
        </Link>
      </li>
      {categories?.map((item) => (
        <li
          className="w-full h-10 flex items-center justify-center bg-primary-400 text-secondary-700 rounded-2xl"
          key={item._id}
        >
          <CheckBox
            title={item.title}
            onChange={(e) => changeHandler(e)}
            checked={selectedCategories.includes(item.englishTitle)}
            name={item.englishTitle}
            value={item.englishTitle}
          />
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;

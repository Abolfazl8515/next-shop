import FilterDropDown from "@/ui/FilterDropDown";

const options = [
  { value: "latest", label: "جدید ترین" },
  { value: "earliest", label: "قدیمی ترین" },
];

function UsersHeader() {
  return (
    <div className="flex items-center lg:justify-between mb-8 lg:flex-row gap-y-3 flex-col">
      <div className="lg:w-1/2 w-full flex gap-x-3 items-center justify-around">
        <h1 className="font-black text-secondary-700 text-xl">لیست کاربران</h1>
      </div>
      <div className="lg:w-1/3 w-full">
        <FilterDropDown options={options} filterField="sort" />
      </div>
    </div>
  );
}

export default UsersHeader;

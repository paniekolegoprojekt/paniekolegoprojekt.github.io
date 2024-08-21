import { FiltersProps } from "./types";
import { twMerge } from "tailwind-merge";
import { categories } from "../../../const";
import { CategoryTag } from "..";

export const Filters = ({
  className,
  filterByCategory,
  filteredCategories,
}: FiltersProps) => {
  return (
    <div className={twMerge(className)}>
      <div className="flex flex-wrap lg:grid gap-4 my-2 mb-8 lg:mb-2 lg:my-0">
        {Object.values(categories).map((category) => (
          <CategoryTag
            key={category.name}
            category={category}
            filterByCategory={filterByCategory}
            filteredCategories={filteredCategories}
          />
        ))}
      </div>
    </div>
  );
};

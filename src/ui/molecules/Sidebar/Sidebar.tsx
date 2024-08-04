import { SidebarProps } from "./types";
import { twMerge } from "tailwind-merge";
import { categories } from "../../../const";
import { sidebarCx } from "./const";
import { CategoryTag } from "..";

export const Sidebar = ({
  className,
  filterByCategory,
  filteredCategories,
  showCategories = false,
}: SidebarProps) => {
  return (
    <div className={twMerge(className, sidebarCx)}>
      <div className="gap-5 lg:gap-3 lg:grid flex">
        {showCategories && (
          <div className="hidden lg:grid gap-2">
            {Object.values(categories).map((category) => (
              <CategoryTag
                category={category}
                filterByCategory={filterByCategory}
                filteredCategories={filteredCategories}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

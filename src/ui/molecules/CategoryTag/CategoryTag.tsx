import { Tag } from "@/ui/atoms";
import { CategoryTagProps } from "./types";
import { Category } from "@/ui/types";
import { twMerge } from "tailwind-merge";

export const CategoryTag = ({
  category,
  filterByCategory,
  filteredCategories,
}: CategoryTagProps) => {
  const { value } = category;
  const filterCategory = (state: Category[]) =>
    state.filter((v: Category) => v !== value);
  const isActive = (category: Category) =>
    filteredCategories?.includes(category);
  return (
    <button
      onClick={() =>
        isActive(category.value)
          ? filterByCategory?.((state) => filterCategory(state))
          : filterByCategory?.((state) => [...state, category.value])
      }
      className={twMerge(
        "text-left px-2 py-1 duration-500 duration bg-transparent w-fit text-ui-black  rounded-md",
        isActive(category.value) && `${category.color} text-white `
      )}
    >
      <Tag className="[&_p]:label-m inline-block" text={category.name} />
    </button>
  );
};

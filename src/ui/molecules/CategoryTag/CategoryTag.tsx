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
        "text-left px-2 py-1 duration-500 duration bg-transparent w-fit text-ui-black border solid border-[#777] text-[#777] rounded-md",
        isActive(category.value) &&
          `${category.color} text-white border-transparent`
      )}
    >
      <Tag
        className="paragraph-l lg:paragraph-xl inline-block"
        text={category.name}
      />
    </button>
  );
};

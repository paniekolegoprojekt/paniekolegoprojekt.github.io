import { Tag } from "@/ui/atoms";
import { CategoryTagProps } from "./types";
import { Category } from "@/ui/types";
import { twMerge } from "tailwind-merge";

export const CategoryTag = ({
  category,
  setCategory,
  selectedCategory,
}: CategoryTagProps) => {
  const isActive = (category: Category) =>
    selectedCategory && selectedCategory.value === category;

  return (
    <button
      onClick={() => setCategory?.(category)}
      className={twMerge(
        "text-left px-2 py-1 duration-500 duration bg-transparent w-fit text-ui-black border solid border-[#777] text-[#777] rounded-md",
        isActive(category.value) &&
          `${category.color} text-white border-transparent`
      )}
    >
      <Tag
        className="paragraph-m  xl:paragraph-l 2xl:paragraph-xl inline-block"
        text={category.name}
      />
    </button>
  );
};

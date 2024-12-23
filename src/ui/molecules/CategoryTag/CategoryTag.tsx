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
      onClick={() =>
        setCategory?.((current) =>
          category !== current ? category : undefined
        )
      }
      className={twMerge(
        "text-left px-2 pb-1 duration-500 duration bg-white w-fit text-ui-black border solid  border-ui-primary-grey text-[#777] rounded-md",
        isActive(category.value) &&
          `${category.color} text-white border-transparent`
      )}
    >
      <Tag
        className="paragraph-s xl:paragraph-m 2xl:paragraph-l inline-block"
        text={category.name}
      />
    </button>
  );
};

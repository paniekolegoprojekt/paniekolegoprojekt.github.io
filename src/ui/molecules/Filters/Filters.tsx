import { FiltersProps } from "./types";
import { categories } from "../../../const";
import { CategoryTag } from "..";

export const Filters = ({ setCategory, selectedCategory }: FiltersProps) => (
  <div className="flex flex-wrap gap-4 mt-4 mb-8 col-span-12 ">
    {Object.values(categories).map((category) => (
      <CategoryTag
        key={category.name}
        category={category}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
    ))}
  </div>
);

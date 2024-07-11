import { Category, CategoryType } from "@/ui/types";
import { Dispatch, SetStateAction } from "react";

export type CategoryTagProps = {
  category: CategoryType;
  filterByCategory?: Dispatch<SetStateAction<Category[]>>;
  filteredCategories?: Category[];
};

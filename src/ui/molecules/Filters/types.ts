import { CategoryType } from "../../../ui/types";
import { Dispatch, SetStateAction } from "react";

export type FiltersProps = {
  className?: string;
  setCategory?: Dispatch<SetStateAction<CategoryType | undefined>>;
  selectedCategory?: CategoryType;
  showCategories?: boolean;
};

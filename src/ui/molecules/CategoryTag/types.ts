import { CategoryType } from "@/ui/types";
import { Dispatch, SetStateAction } from "react";

export type CategoryTagProps = {
  category: CategoryType;
  setCategory?: Dispatch<SetStateAction<CategoryType | undefined>>;
  selectedCategory?: CategoryType;
};

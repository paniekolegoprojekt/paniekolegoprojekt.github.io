import { CategoryType } from "@/utils/utils";
import { Category, ProjectProps } from "../../types";

export type CardListProps = {
  cards: ProjectProps[];
  filteredCategories: Category[];
};

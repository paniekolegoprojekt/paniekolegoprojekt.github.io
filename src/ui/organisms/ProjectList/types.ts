import { Dispatch, SetStateAction } from "react";
import { Category, ProjectProps } from "../../types";

export type CardListProps = {
  cards: ProjectProps[];
  filteredCategories: Category[];
  filterByCategory?: Dispatch<SetStateAction<Category[]>>;
};

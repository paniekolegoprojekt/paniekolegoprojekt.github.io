import { Dispatch, SetStateAction } from "react";
import { CategoryType, ProjectProps } from "../../types";

export type CardListProps = {
  cards: ProjectProps[];
  selectedCategory?: CategoryType;
  setCategory?: Dispatch<SetStateAction<CategoryType | undefined>>;
};

import { Dispatch, SetStateAction } from "react";
import { CategoryType, ProjectProps } from "../../types";

export type ProjectCardProps = {
  isFilteredOut?: boolean;
  filteredCount?: number;
  setActiveProject: Dispatch<SetStateAction<ProjectProps | undefined>>;
  selectedCategory?: CategoryType;
  project?: ProjectProps;
};

import { Dispatch, SetStateAction } from "react";
import { CategoryType, ProjectProps } from "../../types";

export type ProjectCardProps = {
  isFilteredOut?: boolean;
  filteredCount?: number;
  setActiveProject: Dispatch<
    SetStateAction<[ProjectProps | undefined, boolean]>
  >;
  selectedCategory?: CategoryType;
  project?: ProjectProps;
};

import { CategoryType, ProjectProps } from "../../types";
import { ProjectStateTrigger } from "../ProjectModal/types";

export type ProjectCardProps = {
  isFilteredOut?: boolean;
  filteredCount?: number;
  setActiveProject: ProjectStateTrigger;
  selectedCategory?: CategoryType;
  project?: ProjectProps;
};

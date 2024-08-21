import { Dispatch, SetStateAction } from "react";
import { ProjectProps } from "../../types";

export type ProjectCardProps = {
  isFilteredOut?: boolean;
  filteredCount?: number;
  setActiveProject: Dispatch<SetStateAction<ProjectProps | undefined>>;
  project?: ProjectProps;
};

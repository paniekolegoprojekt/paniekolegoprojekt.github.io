import { Dispatch, SetStateAction } from "react";
import { ProjectProps } from "../../types";

export type ProjectCardProps = {
  isFilteredOut?: boolean;
  isFiltering?: boolean;
  setActiveProject: Dispatch<SetStateAction<ProjectProps | undefined>>;
  project?: ProjectProps;
};

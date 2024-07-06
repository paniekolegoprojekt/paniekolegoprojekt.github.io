import { ProjectProps } from "../../types";

export type ProjectCardProps = ProjectProps & {
  isFilteredOut?: boolean;
  cx?: string;
};

import { Dispatch, SetStateAction } from "react";
import { ProjectCardProps } from "../ProjectCard/types";
import { ProjectProps } from "@/ui/types";

export type ProjectModalProps = {
  project?: ProjectProps;
  setActiveProject: Dispatch<SetStateAction<ProjectProps | undefined>>;
};

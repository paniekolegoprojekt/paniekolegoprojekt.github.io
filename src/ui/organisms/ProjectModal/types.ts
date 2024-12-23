import { Dispatch, SetStateAction } from "react";
import { ProjectProps } from "../../types";

export type ProjectState = [ProjectProps | undefined, boolean];

export type ProjectStateTrigger = Dispatch<SetStateAction<ProjectState>>;

export type ProjectModalProps = {
  project?: ProjectProps;
  setActiveProject: ProjectStateTrigger;
  isOpen: boolean;
};

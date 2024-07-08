import { Dispatch, SetStateAction } from "react";
import { ProjectProps } from "../../types";

export type ProjectModalProps = {
  project?: ProjectProps;
  setActiveProject: Dispatch<SetStateAction<ProjectProps | undefined>>;
};

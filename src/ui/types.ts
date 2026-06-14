import { ProjectType, Section } from "@/const/const";

export type ComponentType = {
  className?: string;
};

export type ProjectProps = {
  section: Section;
  name: string;
  date?: string;
  order?: number;
  description?: string;
  content?: React.ReactNode;
  shortDesc?: string;
  tags?: (ProjectType | string)[];
  assets: string[];
} & ComponentType;

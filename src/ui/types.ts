import { ProjectType, Section } from "@/const/const";

export type ComponentType = {
  className?: string;
  style?: React.CSSProperties;
};

export type ProjectProps = {
  section: Section;
  name: string;
  date?: string;
  bgColor?: string;
  tags?: (ProjectType | string)[];
  assets: string[];
} & ComponentType;

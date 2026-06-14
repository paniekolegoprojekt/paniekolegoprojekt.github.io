import { ComponentType } from "@/ui/types";

export type TextProps = {
  text: React.ReactNode;
  type?: string;
  style?: React.CSSProperties;
} & ComponentType;

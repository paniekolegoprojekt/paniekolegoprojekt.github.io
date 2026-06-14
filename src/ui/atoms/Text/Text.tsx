import { TextProps } from "./types";

export const Text = ({ text, className, style }: TextProps) => (
  <p className={className} style={style}>
    {text}
  </p>
);

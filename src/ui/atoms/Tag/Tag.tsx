import { TagProps } from "./types";

export const Tag = ({ text, className, styles }: TagProps) => {
  return (
    <span className={className} style={styles}>
      <p className="uppercase">{text}</p>
    </span>
  );
};

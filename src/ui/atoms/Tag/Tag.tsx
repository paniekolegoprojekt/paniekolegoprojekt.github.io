import React from "react";
import { TagProps } from "./types";

export const Tag = ({ text, className }: TagProps) => {
  return (
    <span className={className}>
      <p className="label-s uppercase">{text}</p>
    </span>
  );
};

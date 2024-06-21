import React from "react";
import { TextProps } from "./types";

export const Text = ({ text, className }: TextProps) => {
  return <p className={className}>{text}</p>;
};

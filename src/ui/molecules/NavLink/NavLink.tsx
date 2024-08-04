import { NavLinkProps } from "./types";
import { Text } from "atoms";

export const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <a href={href}>
      <Text className="title-m xl:title-xl uppercase" text={text} />
    </a>
  );
};

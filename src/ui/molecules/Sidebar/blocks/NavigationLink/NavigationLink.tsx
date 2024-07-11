import { NavigationLinkProps } from "./types";
import { NavLink } from "react-router-dom";
import { Text } from "../../../../atoms";

export const NavigationLink = ({ text, path }: NavigationLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "[&_p]:underline" : "")}
      to={path}
    >
      <Text text={text} className="lg:title uppercase title-s" />
    </NavLink>
  );
};

import { NavLinkProps } from "./types";
import { Text } from "atoms";

export const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <a href={href} className="hover:underline hover:text-ui-primary-blue">
      <Text className="title-m xl:title-xl uppercase" text={text} />
    </a>
  );
};

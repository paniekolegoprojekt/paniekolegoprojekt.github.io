import { SidebarProps } from "./types";
import { twMerge } from "tailwind-merge";
import { Tag, Text } from "../../atoms";
import { NavLink } from "react-router-dom";
import { categories } from "../../../const";
import { Category } from "../../types";
export const Sidebar = ({
  className,
  filterByCategory,
  filteredCategories,
  showCategories = false,
}: SidebarProps) => {
  const isActive = (category: Category) =>
    filteredCategories?.includes(category);

  return (
    <div
      className={twMerge(
        className,
        "bg-white xxl:p-14 xl:p-8 md:p-8 p-4 min-h-unset lg:min-h-screen flex lg:grid justify-end lg:justify-normal items-center content-baseline max-h-28"
      )}
    >
      <img
        src="shared/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="h-16 lg:h-32 w-auto lg:mb-8 mr-auto"
      />
      <div className="gap-4 lg:gap-3 lg:grid flex">
        <NavLink className={(isActive) => isActive && "underline"} to="/">
          <Text text="Projekty" className="title uppercase" />
        </NavLink>
        {showCategories && (
          <div className="hidden lg:grid gap-2">
            {Object.values(categories).map((category) => (
              <button
                key={category.name}
                onClick={() =>
                  isActive(category.category)
                    ? filterByCategory?.((state) =>
                        state.filter((v) => v !== category.category)
                      )
                    : filterByCategory?.((state) => [
                        ...state,
                        category.category,
                      ])
                }
                className={twMerge(
                  "text-left px-2 py-1 duration-500 duration bg-transparent w-fit",
                  isActive(category.category) && `${category.color} text-white `
                )}
              >
                <Tag
                  className="[&_p]:label-m inline-block"
                  text={category.name}
                />
              </button>
            ))}
          </div>
        )}
        <NavLink className={(isActive) => isActive && "underline"} to="/about">
          <Text text="O mnie" className="title uppercase" />
        </NavLink>
        <NavLink
          className={(isActive) => isActive && "underline"}
          to="/contact"
        >
          <Text text="Kontakt" className="title uppercase" />
        </NavLink>
        <Text
          text="Copyright Panie Kolego Projekt 2024"
          className="label-s mt-auto text-ui-primary-grey hidden lg:block"
        />
      </div>
    </div>
  );
};

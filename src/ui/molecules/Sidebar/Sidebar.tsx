import { SidebarProps } from "./types";
import { twMerge } from "tailwind-merge";
import { Text } from "atoms";
import { categories } from "../../../const";
import { NavigationLink } from "./blocks/NavigationLink/NavigationLink";
import { sidebarCx } from "./const";
import { CategoryTag } from "..";

export const Sidebar = ({
  className,
  filterByCategory,
  filteredCategories,
  showCategories = false,
}: SidebarProps) => {
  return (
    <div className={twMerge(className, sidebarCx)}>
      <img
        src="shared/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="h-16 lg:h-32 w-auto lg:mb-8 mr-auto"
      />
      <div className="gap-5 lg:gap-3 lg:grid flex">
        <div className="flex gap-3 justify-between">
          <NavigationLink text="Projekty" path="/" />
          <button
            className={twMerge(
              "opacity-0 border-ui-light-grey bg-ui-light-grey solid  p-1 uppercase rounded-sm text-[#333] text-xs",
              filteredCategories?.length && "opacity-100",
              "hidden lg:block"
            )}
            onClick={() => filterByCategory?.([])}
          >
            Wyczyść filtry
          </button>
        </div>
        {showCategories && (
          <div className="hidden lg:grid gap-2">
            {Object.values(categories).map((category) => (
              <CategoryTag
                category={category}
                filterByCategory={filterByCategory}
                filteredCategories={filteredCategories}
              />
            ))}
          </div>
        )}
        <NavigationLink text="O mnie" path="/about" />
        <NavigationLink text="Kontakt" path="/contact" />
        <Text
          text="Copyright Panie Kolego Projekt 2024"
          className="label-s mt-auto text-ui-primary-grey hidden lg:block"
        />
      </div>
    </div>
  );
};

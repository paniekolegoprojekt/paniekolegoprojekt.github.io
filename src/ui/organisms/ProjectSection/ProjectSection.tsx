import { Filters } from "@/ui/molecules";
import { Category } from "@/ui/types";
import React from "react";
import { Text } from "atoms";
import { projects } from "../../../const";
import ClearFilterBtn from "@/ui/molecules/ClearFilterBtn/ClearFilterBtn";
import { ProjectList } from "../ProjectList/ProjectList";

export const ProjectSection = () => {
  const [filteredCategories, filterByCategory] = React.useState<Category[]>([]);

  return (
    <div
      className="xxl:w-[1580px] w-full m-auto bg-ui-light-grey p-4 xl:py-16 xl:px-16"
      id="projects"
    >
      <div className="flex gap-8 items-center mb-2 xl:mb-8">
        <Text text="PROJEKTY" className="title-xl lg:title-2xl" />
        <ClearFilterBtn
          onClick={() => filterByCategory?.([])}
          visible={!!filteredCategories?.length}
        />
      </div>
      <div className="grid grid-cols-12">
        <Filters
          className="lg:col-span-2 col-span-12"
          filterByCategory={filterByCategory}
          filteredCategories={filteredCategories}
        />
        <div className="lg:col-span-10 col-span-12 grid grid-cols-12 gap-2 xl:gap-4">
          <ProjectList
            cards={projects}
            filteredCategories={filteredCategories}
            filterByCategory={filterByCategory}
          />
        </div>
      </div>
    </div>
  );
};

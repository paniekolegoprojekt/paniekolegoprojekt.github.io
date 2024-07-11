import React from "react";
import { Sidebar } from "../ui/molecules";
import { Category } from "../ui/types";
import ProjectList from "../ui/organisms/ProjectList/ProjectList";
import { projects } from "../const";

export const HomePage = () => {
  const [filteredCategories, filterByCategory] = React.useState<Category[]>([]);
  return (
    <main className="grid grid-cols-12 bg-ui-polar lg:gap-4 gap-0">
      <Sidebar
        className="col-span-12 lg:col-span-2 sticky top-0"
        filterByCategory={filterByCategory}
        filteredCategories={filteredCategories}
        showCategories={true}
      />
      <div className="lg:col-span-10 col-span-12 bg-ui-light-grey grid grid-cols-12 gap-4 border-l solid border-ui-grey">
        <ProjectList
          cards={projects}
          filteredCategories={filteredCategories}
          filterByCategory={filterByCategory}
        />
      </div>
    </main>
  );
};

import React from "react";
import { CardListProps } from "./types";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectProps } from "@/ui/types";

const ProjectList = ({ cards, filteredCategories }: CardListProps) => {
  const isFiltered = (card: ProjectProps) =>
    filteredCategories?.length
      ? filteredCategories.some((tag) => card?.tags?.includes(tag))
      : true;
  return (
    <div className="col-span-12 flex h-[calc(100vh_-2rem_-7vh)] lg:h-screen flex-wrap content-start p-4 overflow-y-auto">
      {cards.map((card) => (
        <ProjectCard
          cx="w-[50%] lg:h-auto lg:w-[20%] flex aspect-square"
          {...card}
          key={card.id}
          isFilteredOut={!isFiltered(card)}
        />
      ))}
    </div>
  );
};

export default ProjectList;

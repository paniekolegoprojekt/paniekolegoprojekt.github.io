import { useState } from "react";
import { CardListProps } from "./types";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectProps } from "$ui/types";
import { ProjectModal } from "../ProjectModal/ProjectModal";

export const ProjectList = ({ cards, filteredCategories }: CardListProps) => {
  const isFiltered = (card: ProjectProps) =>
    filteredCategories?.length
      ? filteredCategories.some((tag) => card?.tags?.includes(tag))
      : true;

  const [activeProject, setActiveProject] = useState<
    ProjectProps | undefined
  >();

  return (
    <div className="col-span-12 flex flex-wrap content-start -m-2">
      {cards.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          isFilteredOut={!isFiltered(project)}
          isFiltering={!!filteredCategories.length}
          setActiveProject={setActiveProject}
        />
      ))}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          setActiveProject={setActiveProject}
          isOpen={!!activeProject}
        />
      )}
    </div>
  );
};

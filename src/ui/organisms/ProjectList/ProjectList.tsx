import React, { useState } from "react";
import { CardListProps } from "./types";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectProps } from "../../../ui/types";
import { ProjectModal } from "../ProjectModal/ProjectModal";

const ProjectList = ({ cards, filteredCategories }: CardListProps) => {
  const isFiltered = (card: ProjectProps) =>
    filteredCategories?.length
      ? filteredCategories.some((tag) => card?.tags?.includes(tag))
      : true;

  const [activeProject, setActiveProject] = useState<
    ProjectProps | undefined
  >();

  return (
    <div className="col-span-12 flex h-[calc(100vh_-2rem_-7vh)] lg:h-screen flex-wrap content-start p-4 overflow-y-auto">
      {cards.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          isFilteredOut={!isFiltered(project)}
          setActiveProject={setActiveProject}
        />
      ))}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          setActiveProject={setActiveProject}
        />
      )}
    </div>
  );
};

export default ProjectList;

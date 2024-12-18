import { useState } from "react";
import { CardListProps } from "./types";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectProps } from "$ui/types";
import { ProjectModal } from "../ProjectModal/ProjectModal";

export const ProjectList = ({ cards, selectedCategory }: CardListProps) => {
  const [activeProject, setActiveProject] = useState<
    ProjectProps | undefined
  >();

  return (
    <div className="col-span-12 flex flex-wrap content-start -m-2">
      {cards.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          setActiveProject={setActiveProject}
          selectedCategory={selectedCategory}
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

import { useState } from "react";
import { CardListProps } from "./types";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectProps } from "$ui/types";
import { ProjectModal } from "../ProjectModal/ProjectModal";

export const ProjectList = ({ cards, selectedCategory }: CardListProps) => {
  const [[activeProject, isOpen], setActiveProject] = useState<
    [ProjectProps | undefined, boolean]
  >([undefined, false]);

  return (
    <div className="col-span-12 grid lg:grid-cols-4 grid-cols-3 gap-4">
      {cards.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          setActiveProject={setActiveProject}
          selectedCategory={selectedCategory}
        />
      ))}
      <ProjectModal
        project={activeProject}
        setActiveProject={setActiveProject}
        isOpen={isOpen}
      />
    </div>
  );
};

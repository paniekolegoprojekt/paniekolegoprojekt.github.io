import { useState } from "react";
import { CardListProps } from "./types";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectModal } from "../ProjectModal/ProjectModal";
import { ProjectState } from "../ProjectModal/types";

export const ProjectList = ({ cards, selectedCategory }: CardListProps) => {
  const [[activeProject, isOpen], setActiveProject] = useState<ProjectState>([
    undefined,
    false,
  ]);

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

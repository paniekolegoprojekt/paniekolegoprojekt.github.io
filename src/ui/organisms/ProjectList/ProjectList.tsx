import React from "react";
import { CardListProps } from "./types";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectList = ({ cards }: CardListProps) => {
  return (
    <div className="grid grid-cols-12 gap-4 col-span-12 auto-rows-min p-8 overflow-y-auto h-screen">
      {cards.map((card) => (
        <ProjectCard {...card} key={card.id} />
      ))}
    </div>
  );
};

export default ProjectList;

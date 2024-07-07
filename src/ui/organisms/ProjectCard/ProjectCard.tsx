"use client";
import React from "react";
import { ProjectCardProps } from "./types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({
  isFilteredOut,
  project,
  setActiveProject,
}: ProjectCardProps) => {
  return (
    <>
      <div
        className={twMerge(
          "cursor-pointer scale-1 duration-1000 overflow-hidden p-4 w-[50%] lg:h-auto lg:w-[20%] flex aspect-square",
          !isFilteredOut ? "" : "m-0 w-0 lg:w-0 h-0 scale-0 p-0"
        )}
        onClick={() => setActiveProject(project)}
      >
        <div
          className={twMerge(
            "grid bg-white border solid border-ui-grey aspect-square rounded-md justify-center items-center"
          )}
        >
          {project?.thumbnail && (
            <Image
              src={project.thumbnail}
              alt="card-image"
              className={twMerge(
                "w-auto object-contain brightness-100 z-20 grid"
              )}
              width={600}
              height={400}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

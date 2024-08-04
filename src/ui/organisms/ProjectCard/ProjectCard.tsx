import { ProjectCardProps } from "./types";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({
  isFilteredOut,
  project,
  setActiveProject,
}: ProjectCardProps) => {
  return (
    <div
      className={twMerge(
        "cursor-pointer scale-1 duration-500 overflow-hidden p-2 xl:p-4 w-[50%] lg:h-auto lg:w-[25%] flex aspect-square hover:scale-105",
        !isFilteredOut
          ? ""
          : "m-0 w-0 lg:w-0 h-0 scale-0 p-0 xl:p-0 grayscale-0"
      )}
      onClick={() => setActiveProject(project)}
    >
      <div className="grid bg-white duration-500 aspect-square justify-center items-center">
        {project?.thumbnail && (
          <img
            src={project.thumbnail}
            alt="card-image"
            className="object-contain z-20 grid"
            width={600}
            height={400}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

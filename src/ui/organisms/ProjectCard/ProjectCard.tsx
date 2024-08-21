import { ProjectCardProps } from "./types";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({
  isFilteredOut,
  project,
  setActiveProject,
  filteredCount,
}: ProjectCardProps) => {
  return (
    <div
      className={twMerge(
        "cursor-pointer rounded-md scale-1 duration-200 overflow-hidden p-2 xl:p-4 w-[33.3%] lg:h-auto lg:w-[12.5%] grayscale flex aspect-square hover:grayscale-0",
        !isFilteredOut ? "" : "m-0 w-0 lg:w-0 h-0 scale-0 p-0 xl:p-0 grayscale",
        filteredCount &&
          !isFilteredOut &&
          (filteredCount < 5
            ? "lg:w-[33.3%]"
            : filteredCount < 9
            ? "lg:w-[20%]"
            : "")
      )}
      onClick={() => setActiveProject(project)}
    >
      <div className="grid bg-white duration-200 aspect-square justify-center items-center rounded-md ">
        <img
          src={project?.thumbnail}
          alt="card-image"
          className="object-contain z-20 grid rounded-md"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default ProjectCard;

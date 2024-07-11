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
        "cursor-pointer scale-1 duration-500 overflow-hidden p-4 w-[25%] lg:h-auto lg:w-[12.5%] flex aspect-square ",
        !isFilteredOut ? "" : "m-0 w-0 lg:w-0 h-0 scale-0 p-0"
      )}
      onClick={() => setActiveProject(project)}
    >
      <div className="grid bg-white border solid duration-500 border-ui-grey aspect-square rounded-md justify-center items-center hover:grayscale-0 hover:scale-110 hover:shadow-2xl">
        {project?.thumbnail && (
          <img
            src={project.thumbnail}
            alt="card-image"
            className="object-contain brightness-100 z-20 grid"
            width={600}
            height={400}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

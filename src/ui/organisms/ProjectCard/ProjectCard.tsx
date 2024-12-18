import { ProjectCardProps } from "./types";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({
  isFilteredOut,
  project,
  setActiveProject,
  selectedCategory,
}: ProjectCardProps) => {
  const isSelected =
    selectedCategory && project?.tags?.includes(selectedCategory?.value);
  return (
    <div
      className={twMerge(
        "cursor-pointer rounded-md scale-1 duration-200 overflow-hidden p-2 xl:p-4 w-[33.3%] lg:h-auto lg:w-[12.5%]  flex aspect-square relative",
        !isFilteredOut ? "" : ""
      )}
      onClick={() => setActiveProject(project)}
    >
      <div className="grid bg-white duration-200 aspect-square justify-center items-center rounded-md relative">
        <img
          src={project?.thumbnail}
          alt="card-image"
          className={twMerge(
            "object-contain z-20 grid rounded-md",
            !isSelected && selectedCategory && "grayscale"
          )}
          width={600}
          height={400}
        />
        <div
          className={twMerge(
            "absolute inset-0 z-30 transition-all ease-linear rounded-md",
            isSelected && selectedCategory.color,
            isSelected && `opacity-[0.80]`,
            selectedCategory && !isSelected && " bg-white opacity-50"
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;

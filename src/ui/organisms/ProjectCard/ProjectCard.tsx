import { ProjectCardProps } from "./types";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({
  project,
  setActiveProject,
  selectedCategory,
}: ProjectCardProps) => {
  const isSelected =
    selectedCategory && project?.tags?.includes(selectedCategory?.value);
  return (
    <div
      className={twMerge(
        "cursor-pointer duration-200 overflow-hidden flex aspect-square relative hover:scale-105",
        isSelected && "order-first"
      )}
      onClick={() => setActiveProject([project, true])}
    >
      <div className="grid bg-white duration-200 aspect-square justify-center items-center relative">
        <img
          src={project?.thumbnail}
          alt="card-image"
          className={twMerge(
            "object-contain z-20 grid",
            !isSelected && "hover:grayscale-0"
          )}
          width={600}
          height={400}
        />
        <div
          className={twMerge(
            "absolute inset-0 z-30 transition-all ease-linear",
            isSelected && selectedCategory.color,
            isSelected && `opacity-[0.80]`,
            selectedCategory && !isSelected && "bg-white opacity-50",
            "hover:opacity-100 hover:bg-transparent "
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { ProjectCardProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({ thumbnail, id, className }: ProjectCardProps) => {
  return (
    <Link
      href={`project/${id}`}
      className={twMerge(
        className,
        "bg-white col-span-6 md:col-span-3 flex justify-center items-center rounded-md border solid border-ui-grey"
      )}
    >
      <Image
        src={thumbnail}
        alt="card-image"
        className="h-64 w-auto object-contain"
        width={600}
        height={400}
      />
    </Link>
  );
};

export default ProjectCard;

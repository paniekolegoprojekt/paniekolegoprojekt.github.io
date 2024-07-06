import { ProjectProps } from "@/ui/types";
import Link from "next/link";
import React from "react";
import { categories } from "@/const/const";
import { Tag, Text } from "@atoms";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { VideoPlayer } from "@/ui/atoms/VideoPlayer/VideoPlayer";

export const ProjectModal = ({ project }: { project: ProjectProps }) => {
  return (
    <Link
      className="absolute inset-0 bg-ui-dark bg-opacity-50 fade-in"
      href="/project/"
    >
      <div className="bg-white p-8 grid rounded border solid border-ui-light-grey mx-auto xl:my-8 xl:w-1/2 w-full h-[500px] my-0 animate-fadeIn">
        <div className="mb-8 flex justify-between">
          <div>
            {project?.name && <Text text={project.name} className="title-m" />}
            {project?.shortDesc && (
              <Text text={project.shortDesc} className="paragraph-s" />
            )}
          </div>
          <XMarkIcon className="h-4" />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1 gap-4 grid">
            {project?.assets?.map((asset) => (
              <div key={asset}>
                {asset.includes("youtube") ? (
                  <VideoPlayer src={asset} />
                ) : (
                  <Image
                    src={asset}
                    alt="asset"
                    width="300"
                    height="220"
                    className="w-full border border-ui-primary-grey rounded-md solid"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="col-span-1">
            {project?.description && (
              <Text text={project.description} className="paragraph-xs" />
            )}
            <div className="flex gap-4 my-4">
              {project?.tags?.map((tag) => {
                const { name, color } = categories[tag];
                return (
                  <Tag
                    text={name}
                    className={twMerge(
                      color,
                      "py-1 px-2 text-white roundedn-md title-xs"
                    )}
                    key={name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

import React from "react";
import { Text } from "@/ui/atoms";
import * as Accordion from "@radix-ui/react-accordion";
import parse from "html-react-parser";
import { Carousel } from "@/ui/molecules";
import { Media } from "@/ui/molecules/Media/Media";
import { ProjectProps } from "@/ui/types";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";

export type SectionProps = {
  title: string;
  color: string;
  desc: string | React.ReactNode;
  projects: ProjectProps[];
};

export const Section = ({
  section,
  index,
}: {
  section: SectionProps;
  index: number;
}) => {
  const { title, projects, desc, color } = { ...section };
  return (
    <div
      id={title}
      className="grid grid-cols-2 gap-16 h-fit my-16 py-8"
      style={{ "--section-color": color } as React.CSSProperties}
    >
      <div className="grid gap-4 h-fit">
        <Text text={title} className="title-3xl uppercase" />
        <Text text={desc} className="paragraph-m text-justify" />
        <Accordion.Root className="grid gap-4" type="multiple">
          {projects.map((project) => (
            <Accordion.Item className={""} value={project.name}>
              <Accordion.Trigger
                className={twMerge(
                  "hover:bg-[--section-color] hover:text-white ease-in-out transition-all group flex px-3 py-4 rounded-md border w-full justify-between data-[state=open]:bg-[--section-color] data-[state=open]:text-white data-[state=open]:rounded-b-none",
                )}
                style={{ borderColor: color }}
              >
                <div className="flex gap-3">
                  <Text
                    text={project.name}
                    className="title-s uppercase group-data-[state=open]:text-white text-[--section-color] group-hover:text-white transition-all ease-in-out"
                  />
                  <Text
                    text={String(project.tags?.[0])}
                    className="uppercase label-m transition-all ease-in-out"
                  />
                </div>
                <div className="flex gap-3">
                  <Text
                    text={String(project.date)}
                    className="label-m whitespace-nowrap"
                  />
                  <ArrowDownCircleIcon className="h-5" />
                </div>
              </Accordion.Trigger>

              <Accordion.Content
                className="bg-ui-light-grey border data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden"
                style={{ borderColor: color }}
              >
                <div className="px-6 py-4 grid gap-4">
                  <Carousel className="">
                    {project.assets?.map((url) => (
                      <Media
                        url={url}
                        className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
                      />
                    ))}
                  </Carousel>
                  <div className="grid gap-4">
                    <Text
                      text={`${project?.name} / ${project.date}`}
                      className="title-s uppercase"
                    />
                    {project.description && (
                      <div className="xl:paragraph-m paragraph-xs text-ui-dark">
                        {parse(project.description)}
                      </div>
                    )}
                    <div className="flex gap-2">
                      {project?.tags?.map((tag) => (
                        <Text text={`#${tag}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
      <div
        className={twMerge(
          "aspect-square w-100",
          index % 2 == 1 && "order-first",
        )}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

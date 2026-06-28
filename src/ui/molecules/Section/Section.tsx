import React from "react";
import { Text } from "@/ui/atoms";
import * as Accordion from "@radix-ui/react-accordion";
import parse from "html-react-parser";
import { Carousel } from "@/ui/molecules";
import { Media } from "@/ui/molecules/Media/Media";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { t } from "i18next";
import { projects } from "@/const/const";

export type SectionProps = {
  title: string;
  color: string;
  bgUrl?: string;
};

export const Section = ({
  section,
  index,
}: {
  section: SectionProps;
  index: number;
}) => {
  const { title, color, bgUrl } = { ...section };
  return (
    <div
      id={title}
      className="grid grid-cols-12 gap-4 xl:gap-16 h-fit my-8 xl:my-16 py-0 xl:py-8"
      style={{ "--section-color": color } as React.CSSProperties}
    >
      <div className="grid gap-4 h-fit col-span-12 xl:col-span-6">
        <div className="flex items-center gap-4 xl:gap-0">
          <div
            className={twMerge(
              "aspect-square w-[100px] flex relative xl:hidden",
            )}
          >
            <span
              className="absolute w-full h-full opacity-80 z-10"
              style={{ backgroundColor: color }}
            />
            <img
              className={twMerge("w-full", "grayscale")}
              src={bgUrl}
              alt={bgUrl}
              width="1600"
              height="900"
              loading="eager"
            />
          </div>
          <Text text={title} className="title-m xl:title-3xl uppercase" />
        </div>
        <Text
          text={parse(t(title))}
          className="paragraph-s xl:paragraph-m text-justify"
        />
        <Accordion.Root className="grid gap-2 xl:gap-4" type="multiple">
          {projects
            .filter((project) => project.section === title)
            .map((project) => (
              <Accordion.Item
                className={project.className ?? ""}
                value={project.name}
              >
                <Accordion.Trigger
                  className={twMerge(
                    "hover:bg-[--section-color] hover:text-white ease-in-out transition-all group flex p-3 xl:px-3 xl:py-4 rounded-md border w-full justify-between data-[state=open]:bg-[--section-color] data-[state=open]:text-white data-[state=open]:rounded-b-none",
                  )}
                  style={{ borderColor: color }}
                >
                  <div className="flex gap-3 items-center">
                    <Text
                      text={project.name}
                      className="title-xxs xl:title-s uppercase group-data-[state=open]:text-white text-[--section-color] group-hover:text-white transition-all ease-in-out"
                    />
                    <Text
                      text={String(project.tags?.[0])}
                      className="uppercase hidden xL:block label-s xl:label-m transition-all ease-in-out"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Text
                      text={String(project.date)}
                      className="label-s xl:label-m whitespace-nowrap"
                    />
                    <ArrowDownCircleIcon className="h-5" />
                  </div>
                </Accordion.Trigger>

                <Accordion.Content
                  className="bg-ui-light-grey border data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden"
                  style={
                    {
                      "--carousel-bg": project?.bgColor,
                      borderColor: color,
                    } as React.CSSProperties
                  }
                >
                  <Carousel
                    className={twMerge(
                      "w-full bg-[--carousel-bg]",
                      !project.bgColor && "bg-white",
                    )}
                  >
                    {project.assets?.map((url) => (
                      <div className="aspect-square h-fit media-box content-center">
                        <Media url={url} />
                      </div>
                    ))}
                  </Carousel>
                  <div className="p-4 xl:p-6 grid gap-2 xl:gap-4">
                    <div className="grid gap-4">
                      <Text
                        text={`${project?.name} / ${project.date}`}
                        className="title-xs xl:title-s uppercase"
                      />
                      <div className="xl:paragraph-m paragraph-s text-ui-dark">
                        {parse(t(project.name))}
                      </div>
                      <div className="flex gap-2">
                        {project?.tags?.map((tag) => (
                          <Text
                            className="lowercase opacity-50 label-s xl:label-m"
                            text={`#${tag}`}
                          />
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
          "aspect-square w-100 hidden xl:block xl:relative xl:sticky top-12 col-span-2 xl:col-span-6",
          index % 2 == 1 && "order-first",
        )}
      >
        <span
          className="absolute w-full h-full opacity-80 z-10"
          style={{ backgroundColor: color }}
        />
        <img
          className={twMerge("w-full", "grayscale")}
          src={bgUrl}
          alt={bgUrl}
          width="1600"
          height="900"
          loading="eager"
        />
      </div>
    </div>
  );
};

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import parse from "html-react-parser";
import { Carousel, Media } from "@/ui/molecules";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import { ProjectProps } from "@/ui/types";
import { Text } from "@/ui/atoms";
import { twMerge } from "tailwind-merge";
import { t } from "i18next";

export const Project = ({
  name,
  className,
  tags,
  date,
  bgColor,
  color,
  assets,
}: ProjectProps & { color?: string }) => {
  return (
    <Accordion.Item key={name} className={className ?? ""} value={name}>
      <Accordion.Trigger
        className={twMerge(
          "hover:bg-[--section-color] hover:text-white ease-in-out transition-all group flex p-3 xl:px-3 xl:py-4 rounded-md border w-full justify-between data-[state=open]:bg-[--section-color] data-[state=open]:text-white data-[state=open]:rounded-b-none items-center",
        )}
        style={{ borderColor: color }}
      >
        <div className="flex gap-3 items-center">
          <Text
            text={name}
            className="title-xs xl:title-s uppercase group-data-[state=open]:text-white text-[--section-color] group-hover:text-white transition-all ease-in-out"
          />
          <Text
            text={String(tags?.[0])}
            className="uppercase hidden xL:block label-s xl:label-m transition-all ease-in-out"
          />
        </div>
        <div className="flex gap-3">
          <Text
            text={String(date)}
            className="label-s xl:label-m whitespace-nowrap"
          />
          <ArrowDownCircleIcon className="h-5" />
        </div>
      </Accordion.Trigger>

      <Accordion.Content
        className="bg-ui-light-grey border data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden"
        style={
          {
            "--carousel-bg": bgColor,
            borderColor: color,
          } as React.CSSProperties
        }
        id={`${name}-content`}
      >
        <Carousel
          className={twMerge(
            "w-full bg-[--carousel-bg] h-auto carousel-box aspect-square",
            !bgColor && "bg-white",
          )}
        >
          {assets?.map((url) => (
            <div
              key={url}
              className="aspect-square h-fit media-box content-center"
            >
              <Media url={url} />
            </div>
          ))}
        </Carousel>
        <div className="p-4 xl:p-6 grid gap-2 xl:gap-4">
          <div className="grid gap-4">
            <Text text={`${name} / ${date}`} className="title-s uppercase" />
            <div className="xl:paragraph-m paragraph-s text-ui-dark">
              {parse(t(name))}
            </div>
            <div className="flex gap-2">
              {tags?.map((tag) => (
                <Text
                  key={tag}
                  className="lowercase opacity-50 paragraph-s xl:paragraph-m"
                  text={`#${tag}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

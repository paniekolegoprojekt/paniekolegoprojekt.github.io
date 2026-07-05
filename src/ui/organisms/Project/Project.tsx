import React, { lazy } from "react";
const Carousel = lazy(() => import("@/ui/molecules/Carousel/Carousel"));
const Media = lazy(() => import("@/ui/molecules/Media/Media"));
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import parse from "html-react-parser";
import ArrowDownCircleIcon from "@heroicons/react/16/solid/ArrowDownCircleIcon";
import { Text } from "atoms";
import { twMerge } from "tailwind-merge";
import { t } from "i18next";
import { ProjectComponentProps } from "./types";
import { SuspenseLoader } from "molecules";

export const Project = ({
  name,
  className,
  tags,
  date,
  bgColor,
  color,
  assets,
}: ProjectComponentProps) => (
  <AccordionItem key={name} className={className ?? ""} value={name}>
    <AccordionTrigger
      className="hover:bg-[--section-color] hover:text-white ease-in-out transition-all group flex p-3 xl:px-3 xl:py-4 rounded-md border w-full justify-between data-[state=open]:bg-[--section-color] data-[state=open]:text-white data-[state=open]:rounded-b-none items-center"
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
    </AccordionTrigger>

    <AccordionContent
      className="bg-ui-light-grey border data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden"
      id={`${name}-content`}
      style={
        { "--carousel-bg": bgColor, borderColor: color } as React.CSSProperties
      }
    >
      <SuspenseLoader>
        <Carousel
          className={twMerge(
            "w-full bg-[--carousel-bg] h-auto carousel-box aspect-square",
            !bgColor && "bg-white",
          )}
        >
          {assets?.map((url) => (
            <div
              className="aspect-square h-fit media-box content-center"
              key={url}
            >
              <SuspenseLoader>
                <Media url={url} />
              </SuspenseLoader>
            </div>
          ))}
        </Carousel>
      </SuspenseLoader>
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
    </AccordionContent>
  </AccordionItem>
);

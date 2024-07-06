"use client";
import React, { useCallback, useState } from "react";
import { ProjectCardProps } from "./types";
import Image from "next/image";
import { Tag, Text } from "@atoms";
import { twMerge } from "tailwind-merge";
import {
  ArrowLeftIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { VideoPlayer } from "@/ui/atoms/VideoPlayer/VideoPlayer";
import { categories } from "@/const/const";
import useEmblaCarousel from "embla-carousel-react";
import parse from "html-react-parser";

const ProjectCard = ({
  thumbnail,
  date,
  className,
  name,
  shortDesc,
  description,
  tags,
  assets,
  isFilteredOut,
  cx,
}: ProjectCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: false,
    loop: true,
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div
        className={twMerge(
          "cursor-pointer flex scale-1 duration-1000 w-auto overflow-hidden p-4",
          cx,
          !isFilteredOut ? "" : "m-0 w-0 lg:w-0 h-0 scale-0 p-0"
        )}
        onClick={() => setIsActive((state) => !state)}
      >
        <div
          className={twMerge(
            "grid bg-white border solid border-ui-grey aspect-square rounded-md justify-center items-center",
            isActive && "grid-cols-12"
          )}
        >
          <Image
            src={thumbnail}
            alt="card-image"
            className={twMerge(
              "w-auto object-contain brightness-100 z-20 grid"
            )}
            width={600}
            height={400}
          />
        </div>
      </div>
      <div
        className={twMerge(
          "hidden bg-transparent ",
          isActive &&
            "inset-0 bg-ui-light-grey z-30 fixed block fade-in duration-500 h-screen overflow-auto"
        )}
      >
        <div className="lg:flex flex-wrap">
          <div className="w-full lg:w-1/2 p-8 lg:p-40">
            <button
              className="flex w-full gap-2 items-center mb-8"
              onClick={() => setIsActive((state) => !state)}
            >
              <ArrowLeftIcon className="h-4" />
              <Text text="wróć do listy projektów" className="" />
            </button>
            <div className="mb-8 flex justify-between">
              <div>
                {name && <Text text={name} className="title-l" />}
                {shortDesc && <Text text={shortDesc} className="paragraph-m" />}
                {date && <Text text={date} className="label-s" />}
              </div>
            </div>
            {description && (
              <div className="paragraph-xs">{parse(description)}</div>
            )}
            <div className="flex gap-4 my-4">
              {tags?.map((tag) => {
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
          <div
            className={twMerge(
              "w-full lg:w-1/2 h-screen bg-white relative",
              className
            )}
          >
            <button
              className="absolute left-0 p-4 bottom-0 top-0 m-auto cursor-pointer z-30 "
              onClick={() => scrollPrev()}
            >
              <ArrowLeftCircleIcon className="h-8" />
            </button>
            <button
              className="absolute right-0 p-4 bottom-0 top-0 m-auto cursor-pointer z-30"
              onClick={scrollNext}
            >
              <ArrowRightCircleIcon className="h-8" />
            </button>
            <div className="overflow-hidden" ref={emblaRef}>
              <div
                className="grid grid-flow-col"
                style={{ gridAutoColumns: "100%" }}
              >
                {assets?.map((asset, index) => (
                  <div
                    className="px-4 self-center items-center mx-10"
                    key={index}
                  >
                    <div
                      key={asset}
                      className="grid grid-flow-col auto-cols-1-slides justify-center items-center h-screen"
                    >
                      {asset.includes("youtube") ? (
                        <VideoPlayer src={asset} />
                      ) : (
                        <Image
                          src={asset}
                          alt="asset"
                          width="1600"
                          height="900"
                          className="w-auto max-h-[40rem]"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

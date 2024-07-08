import { useCallback } from "react";
import { twMerge } from "tailwind-merge";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import useEmblaCarousel from "embla-carousel-react";
import { Tag, Text, VideoPlayer } from "../../atoms";
import parse from "html-react-parser";
import { ProjectModalProps } from "./types";
import { categories } from "../../../const";

export const ProjectModal = ({
  project,
  setActiveProject,
}: ProjectModalProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: false,
    loop: true,
    slidesToScroll: 1,
  });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const { description, name, shortDesc, date, tags, className, assets } = {
    ...project,
  };

  return (
    <div
      className={
        "inset-0 bg-ui-light-grey z-30 fixed block fadeIn duration-500 h-screen overflow-auto animate-fadeIn"
      }
    >
      <div className="lg:flex flex-wrap">
        <div className="w-full lg:w-1/2 p-8 lg:p-32 xl:p-40">
          <button
            className="flex w-full gap-2 items-center mb-8"
            onClick={() => setActiveProject(undefined)}
          >
            <ArrowLeftIcon className="h-4" />
            <Text text="wróć do listy projektów" />
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
                  key={name}
                  text={name}
                  className={twMerge(
                    color,
                    "py-1 px-2 text-white roundedn-md title-xs"
                  )}
                />
              );
            })}
          </div>
        </div>
        <div
          className={twMerge(
            "w-full lg:w-1/2 h-auto lg:h-screen bg-white relative",
            className
          )}
        >
          <button
            className="absolute left-0 p-4 bottom-0 top-0 m-auto cursor-pointer z-30"
            onClick={scrollPrev}
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
                    className="grid grid-flow-col auto-cols-1-slides justify-center items-center h-auto lg:h-screen"
                  >
                    {asset.includes("youtube") ? (
                      <VideoPlayer src={asset} />
                    ) : (
                      <img
                        src={asset}
                        alt={asset}
                        width="1600"
                        height="900"
                        className="w-auto max-h-[50vh] lg:max-h-[100vh]"
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
  );
};

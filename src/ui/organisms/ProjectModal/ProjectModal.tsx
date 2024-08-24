import { twMerge } from "tailwind-merge";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Tag, Text, VideoPlayer } from "../../atoms";
import parse from "html-react-parser";
import { ProjectModalProps } from "./types";
import { categories } from "../../../const";
import { Carousel } from "../../molecules";
import { useCallback, useEffect } from "react";

export const ProjectModal = ({
  project,
  setActiveProject,
}: ProjectModalProps) => {
  const { description, name, shortDesc, date, tags, className, assets } = {
    ...project,
  };
  const closeModal = useCallback(
    () => setActiveProject(undefined),
    [setActiveProject]
  );

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    return () => {
      document.getElementsByTagName("html")[0].style.overflow = "auto";
      window.removeEventListener("keydown", close);
    };
  }, [closeModal]);

  return (
    <div
      className={
        "inset-0 bg-ui-light-grey z-30 fixed block duration-200 h-screen overflow-auto "
      }
    >
      <div className="lg:flex flex-wrap max-w-[1380px] m-auto">
        <div className="w-full lg:w-1/2 p-8 lg:p-4 xl:p-4 m-auto">
          <button
            className={twMerge(
              "flex mb-8 border-ui-primary-grey border transition-opacity ease-linear bg-ui-primary-grey solid p-2 xl:px-8 xl:py-4 uppercase rounded-md xl:label-xl label-s items-center justify-center gap-1"
            )}
            onClick={closeModal}
          >
            <ArrowLeftIcon className="h-4" />
            <Text text="wróć do listy projektów" />
          </button>

          <div className="mb-6 flex justify-between">
            <div>
              {name && <Text text={name} className="title-xl" />}
              {shortDesc && (
                <Text
                  text={`${shortDesc} / ${date}`}
                  className="paragraph-m uppercase"
                />
              )}
            </div>
          </div>
          {description && (
            <div className="xl:paragraph-m paragraph-xs text-ui-dark">
              {parse(description)}
            </div>
          )}
          <div className="flex gap-4 my-8">
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
        <Carousel
          className={twMerge(
            "w-full lg:w-1/2 h-auto lg:h-screen bg-white xl:py-0 py-4",
            className
          )}
        >
          {assets?.map((asset, index) => (
            <div className="px-4 self-center items-center mx-10" key={index}>
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
        </Carousel>
      </div>
    </div>
  );
};

import { twMerge } from "tailwind-merge";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Tag, Text, VideoPlayer } from "../../atoms";
import parse from "html-react-parser";
import { ProjectModalProps } from "./types";
import { categories } from "../../../const";
import { Carousel } from "../../molecules";
import * as Dialog from "@radix-ui/react-dialog";

export const ProjectModal = ({
  project,
  isOpen,
  setActiveProject,
}: ProjectModalProps) => {
  const { description, name, shortDesc, date, tags, className, assets } = {
    ...project,
  };

  const closeModal = () => isOpen && setActiveProject([project, false]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Content className="fixed inset-0 max-h-[100vh] w-[100vw] bg-ui-light-grey overflow-auto z-30 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut">
          <div className="lg:flex flex-wrap max-w-[1380px] m-auto">
            <div className="w-full lg:w-1/2 p-8 content-center bg-ui-light-grey">
              <div className="mb-4 flex justify-between">
                <div>
                  {date && (
                    <Text text={date} className="paragraph-m  uppercase" />
                  )}
                  {name && <Text text={name} className="title-xl uppercase" />}
                  {shortDesc && (
                    <Text
                      text={`${shortDesc} / ${date}`}
                      className="paragraph-m uppercase"
                    />
                  )}
                </div>
              </div>
              <div className="flex gap-4 mb-4">
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
              {description && (
                <div className="xl:paragraph-m paragraph-xs text-ui-dark">
                  {parse(description)}
                </div>
              )}

              <button
                className={twMerge(
                  "flex mt-4 border-ui-primary-grey border transition-opacity ease-linear bg-white solid p-2 xl:px-4 xl:py-3 uppercase rounded-md xl:label-xl label-s items-center justify-center gap-1 outline-none "
                )}
                onClick={closeModal}
              >
                <ArrowLeftIcon className="h-4" />
                <Text text="wróć do listy projektów" />
              </button>
            </div>
            <Carousel
              className={twMerge(
                "w-full lg:w-1/2 h-auto lg:h-screen bg-white xl:py-0 py-4",
                className
              )}
            >
              {assets?.map((asset, index) => (
                <div className="px-4 self-center items-center" key={index}>
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
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

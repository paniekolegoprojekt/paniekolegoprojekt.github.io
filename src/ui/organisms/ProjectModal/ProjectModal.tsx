import { twMerge } from "tailwind-merge";
import { Tag, Text } from "../../atoms";
import parse from "html-react-parser";
import { ProjectModalProps } from "./types";
import { categories } from "../../../const";
import { Carousel } from "@/ui/molecules";
import * as Dialog from "@radix-ui/react-dialog";
import Media from "./blocks/Media/Media";
import { dialogContentCx } from "./const";
import BackBtn from "./blocks/BackBtn/BackBtn";

export const ProjectModal = ({
  project,
  isOpen,
  setActiveProject,
}: ProjectModalProps) => {
  const { description, name, shortDesc, date, tags, className, assets } = {
    ...project,
  };

  const closeModal = () =>
    isOpen ? setActiveProject([project, false]) : undefined;

  return (
    <Dialog.Root open={isOpen} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Content className={dialogContentCx}>
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
              <BackBtn closeModal={closeModal} cx="hidden lg:flex" />
            </div>
            <Carousel
              className={twMerge(
                "w-full lg:w-1/2 h-auto lg:h-screen bg-white xl:py-0 py-4 w-f",
                className
              )}
            >
              {assets?.map((url) => (
                <Media url={url} />
              ))}
            </Carousel>
            <BackBtn
              closeModal={closeModal}
              cx="flex m-4 lg:hidden w-fit p-4 w-[calc(100%_-_2rem)]"
            />
          </div>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

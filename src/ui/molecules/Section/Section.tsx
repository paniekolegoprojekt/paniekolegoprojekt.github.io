import React, { useEffect } from "react";
import { Text } from "@/ui/atoms";
import { Accordion } from "@radix-ui/react-accordion";
import parse from "html-react-parser";
import { twMerge } from "tailwind-merge";
import { t } from "i18next";
import { projects } from "@/const/const";
import { SectionProps } from "./types";
import { Project } from "@/ui/organisms/Project/Project";
import { useImage } from "@/hooks/useImage";

export const Section = ({
  section,
  index,
}: {
  section: SectionProps;
  index: number;
}) => {
  const { title, color, bgUrl = "", bgMobileUrl = "" } = { ...section };
  const sectionProjects = projects.filter(
    (project) => project.section === title,
  );

  const loaded = useImage(bgUrl);

  const BgImage = ({ url = bgUrl }: { url?: string }) =>
    loaded && (
      <img
        className={twMerge(
          "w-full grayscale ease-in-out transition-all  animate-scaleIn",
        )}
        src={url}
        alt={title}
        width="100"
        height="100"
      />
    );

  useEffect(() => {
    projects.forEach((project) => {
      project.assets.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

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
              "aspect-square w-[100px] flex relative xl:hidden overflow-hidden",
            )}
          >
            <span
              className="absolute w-full h-full opacity-80 z-10"
              style={{ backgroundColor: color }}
            />
            <BgImage url={bgMobileUrl} />
          </div>
          <Text text={title} className="title-m xl:title-3xl uppercase" />
        </div>
        <Text
          text={parse(t(title))}
          className="paragraph-m xxl:paragraph-l text-justify"
        />
        <Accordion className="grid gap-2 xl:gap-4" type="multiple">
          {sectionProjects.map((project) => (
            <Project key={project.name} {...project} color={color} />
          ))}
        </Accordion>
      </div>
      <div
        className={twMerge(
          "aspect-square w-100 hidden xl:block xl:sticky top-12 col-span-2 xl:col-span-6 overflow-hidden",
          index % 2 == 1 && "order-first",
        )}
      >
        <span
          className="absolute w-full h-full opacity-80 z-10"
          style={{ backgroundColor: color }}
        />
        <BgImage url={bgUrl} />
      </div>
    </div>
  );
};

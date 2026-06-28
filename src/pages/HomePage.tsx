import { Text } from "@/ui/atoms";
import { Hero } from "@/ui/organisms/Hero/Hero";
import { sections } from "../const/const";
import { Section } from "@/ui/molecules/Section/Section";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-ui-polar lg:gap-4 gap-0">
      <Hero />
      <div className="w-full my-6 xl:w-[1200px] grid ml-auto mr-auto xl:my-16 xl:px-0 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-8 xl:gap-16 h-fit mb-8">
          <div className="grid gap-2 xl:gap-6 h-fit">
            <Text text="Portfolio" className="title-m xl:title-xl" />
            <div className="grid gap-2 xl:gap-4">
              {sections?.map(({ title, color }) => (
                <a
                  className="rounded-md w-full text-white px-2 py-1 xl:px-4 xl:py-3 justify-between flex lg:hover:ml-4 ml-0 transition-all ease-in-out"
                  style={{ backgroundColor: color }}
                  href={`#${title}`}
                >
                  <Text
                    text={title}
                    className="uppercase title-xxs xl:title-s content-center"
                  />
                  <ChevronRightIcon className="h-8" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-6 max-xl:order-first">
            <Text text={t("about_me_text")} className="title-xl" />
            <div className="paragraph-m text-justify">
              <p className="">{parse(t("about_me.1"))}</p>
              <p className="mt-4">{parse(t("about_me.2"))}</p>
              <p className="mt-4">{parse(t("about_me.3"))}</p>
              <p className="mt-4">{parse(t("about_me.4"))}</p>
            </div>
          </div>
        </div>
        {sections?.map((section, index) => (
          <Section section={section} index={index} />
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 xl:gap-16 h-fit xl:my-16 my-4">
          <div className="grid gap-3">
            <Text className="title-l" text={t("contact")} />
            <Text className="label-l" text={t("contact_text")} />
            <Text
              className="paragraph-s xl:paragraph-xl uppercase"
              text="erykrozdolski@gmail.com"
            />
            <Text
              className="paragraph-xs uppercase"
              text={`Copyrights by Panie Kolego Projekt ${new Date().getFullYear()}`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

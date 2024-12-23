import { Filters } from "@/ui/molecules";
import { CategoryType } from "@/ui/types";
import { useState } from "react";
import { projects } from "../../../const";
import { ProjectList } from "../ProjectList/ProjectList";

export const ProjectSection = () => {
  const [selectedCategory, setCategory] = useState<CategoryType | undefined>();

  return (
    <div className="w-full m-auto bg-ui-light-grey lg:py-8" id="projects">
      <div className="md:max-w-[1000px] w-full m-auto ">
        <div className="paragraph-m lg:paragraph-xl text-justify m-8">
          <p className="title-xl">Projekty</p>
          <p className="mt-4">
            Masz dla mnie ciekawy projekt, szukasz kogoś do współpracy, daj
            znać, odezwę się tak szybko jak to tylko możliwe
            <a
              href="mailto:erykrozdolski@gmail.com"
              className="text-ui-primary-blue pl-1"
            >
              [erykrozdolski@gmail.com]
            </a>
          </p>
          <p className="xl:paragraph-xl paragraph-m uppercase my-8 text-right"></p>
          <Filters
            setCategory={setCategory}
            selectedCategory={selectedCategory}
          />
          <div className="col-span-12 grid grid-cols-12 gap-2 xl:gap-4">
            <ProjectList
              cards={projects}
              setCategory={setCategory}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

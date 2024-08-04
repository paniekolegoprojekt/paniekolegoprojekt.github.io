import React from "react";
import { Sidebar } from "../ui/molecules";
import { Category } from "../ui/types";
import { Text } from "atoms";
import ProjectList from "../ui/organisms/ProjectList/ProjectList";
import { projects } from "../const";
import Hero from "@/ui/organisms/Hero/Hero";
import { twMerge } from "tailwind-merge";

export const HomePage = () => {
  const [filteredCategories, filterByCategory] = React.useState<Category[]>([]);
  return (
    <main className="bg-ui-polar lg:gap-4 gap-0 overflow-auto">
      <Hero />
      <div className="w-[1380px] m-auto">
        <div className="flex gap-3 my-[2rem]">
          <Text text="PROJEKT" className="title-2xl" />
          <button
            className={twMerge(
              "opacity-0 border-ui-light-grey bg-ui-light-grey solid p-1 uppercase rounded-sm text-[#333] text-xs",
              filteredCategories?.length && "opacity-100",
              "hidden lg:block"
            )}
            onClick={() => filterByCategory?.([])}
          >
            Wyczyść filtry
          </button>
        </div>
        <div className="grid grid-cols-12">
          <Sidebar
            className="lg:col-span-2 col-span-12"
            filterByCategory={filterByCategory}
            filteredCategories={filteredCategories}
            showCategories={true}
          />
          <div className="lg:col-span-10 col-span-12 grid grid-cols-12 gap-4">
            <ProjectList
              cards={projects}
              filteredCategories={filteredCategories}
              filterByCategory={filterByCategory}
            />
          </div>
        </div>
      </div>
      <div className="w-[1380px] m-auto my-8">
        <Text className="title-xl mb-4" text="O MNIE" />
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 col-span-12 text-center">
            <img
              src="/shared/me.jpg"
              alt="logo"
              width={1600}
              height={900}
              className="w-100% h-auto mr-auto p-4 rounded-full"
            />
            <Text className="title-m" text="Eryk Rozdolski" />
            <Text
              className="paragraph-s"
              text="projektant / software developer"
            />
          </div>
          <div className="lg:col-span-10 col-span-12">
            <div className="paragraph-s text-balance text-justify w-[80ch] m-auto">
              Dzień dobry. Nazywam się <b>Eryk Rozdolski</b> i robię to co
              należy. To znaczy jeśli uważam, że coś należy zrobić i nie ma
              właściwszej osoby ode mnie, to czuję się w obowiązku żeby to
              zrealizować. Od 2017 roku komercyjnie w
              <b> Panie Kolego Projekt. </b>
              Profesjonalnie zajmuję się tworzeniem oprogramowania jako
              frontend-developer. Poprzez swoje doświadczenie i zainteresowania
              projektowe, łatwiej jest mi poruszać się w tematach ui/ux i
              tematów związanych z designem.
              <p className="mt-4">
                Miałem to szczęście pisać komercyjnie w wielu różnych językach
                tj. Python, OCaml, javascript, co pozwoliło mi nabyć dość
                szeroki pogląd paradygmatyczny, jeśli chodzi o moją intuicję jak
                powinien wyglądać czysty kod. Dziś najczęściej piszę w
                javascript-cie i poruszam się wokół problemów powiązanych z
                <b> Reactem, next.js</b> czy szeroko pojętym web-developmentem.
              </p>
              <p className="mt-4">
                Swój wolny czas lubię spędzać w aktywny sposób, długo grałem
                amatorsko w piłkę nożną. Poświęcam sporo czasu innym sportom,
                ostatnio trochę więcej skakance i szachom. Od czasu do czasu
                próbuję nagrywać własną muzykę, a jeśli to się nie udaje to
                słucham cudzej.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1380px] m-auto my-8">
        <Text className="title-xl mb-4  uppercase" text="KONTAKT" />
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 col-span-12 text-center"></div>
          <div className="lg:col-span-10 col-span-12">
            <div className="title-2xl">
              Masz dla mnie ciekawy projekt, szukasz kogoś do współpracy, daj
              znać, odezwę się tak szybko jak to tylko możliwe
            </div>
            <div>
              <Text
                text="Copyright Panie Kolego Projekt 2024"
                className="label-s mt-auto text-ui-primary-grey hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

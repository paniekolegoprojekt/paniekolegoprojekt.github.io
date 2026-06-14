import { Text } from "@/ui/atoms";
import { Hero } from "@/ui/organisms/Hero/Hero";
import { sections } from "../const/const";
import { Section } from "@/ui/molecules/Section/Section";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export const HomePage = () => {
  return (
    <main className="bg-ui-polar lg:gap-4 gap-0 overflow-auto">
      <Hero />
      <div className="max-xl:w-[1200px] w-[1200px] grid ml-auto mr-auto my-16 ">
        <div className="grid grid-cols-2 w-full gap-16 h-fit mb-8 max-xl:grid-cols-1">
          <div className="grid gap-6 h-fit">
            <Text text="Portfolio" className="title-xl" />
            <div className="grid gap-4">
              {sections?.map(({ title, color }) => (
                <a
                  className="rounded-md w-full text-white px-4 py-3 justify-between flex"
                  style={{ backgroundColor: color }}
                  href={`#${title}`}
                >
                  <Text
                    text={title}
                    className="uppercase title-s content-center"
                  />
                  <ChevronRightIcon className="h-8" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-6 max-xl:order-first">
            <Text text="About me" className="title-xl" />
            <div className="paragraph-m text-justify">
              <p className="">
                Nazywam się Eryk Rozdolski i robię to co należy. To znaczy jeśli
                uważam, że coś należy zrobić i nie ma właściwszej osoby ode
                mnie, to czuję się w obowiązku żeby to zrealizować.
              </p>
              <p className="mt-4">
                Od 2017 roku w{" "}
                <Text className="title-s inline" text="Panie Kolego Projekt." />{" "}
                Głównie zajmuję się tworzeniem oprogramowania jako
                frontend-developer. Poprzez swoje doświadczenie i
                zainteresowania projektowe, łatwiej jest mi poruszać się w
                tematach ui/ux i tematów związanych z designem.
              </p>
              <p className="mt-4">
                Miałem to szczęście pisać komercyjnie w wielu różnych językach
                tj. Python, OCaml, Javascript, co pozwoliło mi nabyć szeroki
                pogląd paradygmatyczny, jeśli chodzi o moją intuicję jak
                powinien wyglądać czysty kod. Dziś najczęściej piszę w js-cie i
                poruszam się wokół problemów powiązanych z szeroko pojętym
                web-developmentem.
              </p>
              <p className="">
                Swój wolny czas lubię spędzać w aktywny sposób, długo grałem
                amatorsko w piłkę nożną. Poświęcam sporo czasu innym sportom,
                ostatnio trochę więcej skakance i szachom. Od czasu do czasu
                próbuję nagrywać własną muzykę, a jeśli to się nie udaje to
                słucham cudzej.
              </p>
            </div>
          </div>
        </div>
        {sections?.map((section, index) => (
          <Section section={section} index={index} />
        ))}
        <div className="grid grid-cols-2 w-full gap-16 h-fit my-16">
          <div className="grid gap-3">
            <Text className="title-m" text="Kontakt" />
            <Text
              className=""
              text="Masz dla mnie ciekawy projekt, szukasz kogoś do współpracy, daj znać, odezwę się tak szybko jak to tylko możliwe"
            />
            <Text className="" text="erykrozdolski@gmail.com" />
            <Text className="" text="Copyright Panie Kolego Projekt 2026" />
          </div>
        </div>
      </div>
    </main>
  );
};

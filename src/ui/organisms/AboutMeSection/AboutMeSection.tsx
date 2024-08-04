import { Text } from "atoms";

export const AboutMeSection = () => {
  return (
    <div
      className="xxl:w-[1580px] w-full m-auto  p-4 xl:py-16 xl:px-16 bg-white"
      id="aboutme"
    >
      <Text className="title-xl lg:title-2xl mb-4" text="O MNIE" />
      <div className="grid grid-cols-12 ">
        <div className="lg:col-span-2 col-span-12 text-center mb-8">
          <img
            src="/shared/me.jpg"
            alt="logo"
            width={1600}
            height={900}
            className="w-[200px] xl:w-full m-auto h-auto mr-auto p-4 rounded-full"
          />
          <Text className="title-m" text="Eryk Rozdolski" />
          <Text
            className="paragraph-s"
            text="projektant / software developer"
          />
        </div>
        <div className="lg:col-span-10 col-span-12">
          <div className="paragraph-m text-balance text-justify max-w-unset xl:max-w-[73ch] m-auto">
            Dzień dobry. Nazywam się <b>Eryk Rozdolski</b> i robię to co należy.
            To znaczy jeśli uważam, że coś należy zrobić i nie ma właściwszej
            osoby ode mnie, to czuję się w obowiązku żeby to zrealizować. Od
            2017 roku komercyjnie w<b> Panie Kolego Projekt. </b>
            Profesjonalnie zajmuję się tworzeniem oprogramowania jako
            frontend-developer. Poprzez swoje doświadczenie i zainteresowania
            projektowe, łatwiej jest mi poruszać się w tematach ui/ux i tematów
            związanych z designem.
            <p className="mt-4">
              Miałem to szczęście pisać komercyjnie w wielu różnych językach tj.
              Python, OCaml, javascript, co pozwoliło mi nabyć dość szeroki
              pogląd paradygmatyczny, jeśli chodzi o moją intuicję jak powinien
              wyglądać czysty kod. Dziś najczęściej piszę w javascript-cie i
              poruszam się wokół problemów powiązanych z<b> Reactem, next.js</b>{" "}
              czy szeroko pojętym web-developmentem.
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
  );
};

import { Sidebar } from "@/ui/molecules";
import Image from "next/image";
import { Text } from "@atoms";

export default function Layout() {
  return (
    <main className="grid grid-cols-12 bg-ui-polar gap-4">
      <Sidebar className="col-span-12 lg:col-span-2" />
      <div className="lg:col-span-10 col-span-12 bg-ui-light-grey grid grid-cols-12 gap-4 border-l solid border-ui-grey h-[calc(90vh_-2rem)] overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  col-span-12 p-8">
          <div className="p-4 lg:p-8">
            <Text className="title-xl mb-4" text="O mnie" />
            <div className="paragraph-s text-balance text-justify">
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
          <Image
            src="/images/about/about.jpg"
            alt="logo"
            width={1600}
            height={900}
            className="w-100% h-auto mr-auto rounded-xl p-4"
          />
        </div>
      </div>
    </main>
  );
}

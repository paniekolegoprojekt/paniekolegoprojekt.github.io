import { Category, CategoryType, ProjectProps } from "./ui/types";

export const categories: Record<Category, CategoryType> = {
  [Category.Branding]: {
    name: "Branding",
    color: "bg-ui-primary-blue",
    value: Category.Branding,
  },
  [Category.GraphicDesign]: {
    name: "Graphic Design",
    color: "bg-ui-aquamarine",
    value: Category.GraphicDesign,
  },
  [Category.Website]: {
    name: "Websites",
    color: "bg-ui-blue",
    value: Category.Website,
  },
  [Category.Software]: {
    name: "Software",
    color: "bg-ui-red",
    value: Category.Software,
  },
  [Category.Event]: {
    name: "Event Poster",
    color: "bg-ui-green",
    value: Category.Event,
  },
  [Category.Naming]: {
    name: "Naming",
    color: "bg-ui-dark-blue",
    value: Category.Naming,
  },
  [Category.Music]: {
    name: "Music",
    color: "bg-ui-yellow",
    value: Category.Music,
  },
  [Category.Graffiti]: {
    name: "Graffiti",
    color: "bg-ui-salmon",
    value: Category.Graffiti,
  },
  [Category.Literature]: {
    name: "Literature",
    color: "bg-ui-pink",
    value: Category.Literature,
  },
};

export const projects: ProjectProps[] = [
  {
    id: "ads_buduje",
    name: "ADS Buduje",
    date: "2022.04",
    shortDesc: "branding",
    description:
      "<p>identyfikacja wizualna dla sklepu z materiałami budowlanymi,</p><p>rozszerzenie rodziny marek ADS</p>",
    thumbnail: "/images/ads_buduje/thumbnail.png",
    assets: [
      "/images/ads_buduje/asset1.png",
      "/images/ads_buduje/asset2.png",
      "/images/ads_buduje/asset3.png",
    ],
    tags: [Category.Branding],
    // className: "bg-[#8cbf30]",
  },
  {
    id: "sklep_tapicera",
    name: "sklep tapicera",
    date: "2020.02",
    shortDesc: "identyfikacja wizualna",
    thumbnail: "/images/skleptapicera/thumbnail.png",
    description: "identyfikacja wizualna dla sklepu z materiałami tapicerskimi",
    assets: [
      "/images/skleptapicera/asset1.png",
      "/images/skleptapicera/asset2.png",
      "/images/skleptapicera/asset3.png",
      "/images/skleptapicera/asset4.png",
    ],
    tags: [Category.Branding],
  },
  {
    id: "indem",
    name: "indem odszkodowania",
    shortDesc: "branding, www, mailing",
    date: "2023.09",
    description: `- identyfikacja wizualna dla firmy odszkodowawczej, 
    <p>- projekt oraz wdrożenie strony www,</p> 
    <p>- naming - czyli proces tworzenia nazwy marki,</p> 
    <p>- projekt dokumentów firmowych,</p>
    <p>- konfiguracja skrzynek mailowych dla całej firmy</p>`,
    thumbnail: "/images/indem/thumbnail.png",
    assets: [
      "/images/indem/asset1.png",
      "/images/indem/asset2.png",
      "/images/indem/asset3.png",
      "/images/indem/asset4.png",
      "/images/indem/asset5.png",
    ],
    tags: [Category.Branding, Category.Website, Category.Naming],
    // className: "bg-[#e8b44c]",
  },

  {
    id: "lokal",
    name: "lokal",
    date: "2015-2023",
    shortDesc: "seria plakatów eventowych",
    thumbnail: "/images/lokal/thumbnail.png",
    description: `Seria plakatów z lat 2015-2024, promujących festiwal Lokal, organizowany przez Stowarzyszenie ARTwarium.`,
    assets: [
      "/images/lokal/asset1.png",
      "/images/lokal/asset2.png",
      "/images/lokal/asset3.png",
      "/images/lokal/asset4.png",
      "/images/lokal/asset5.png",
      "/images/lokal/asset6.png",
      "/images/lokal/asset7.png",
      "/images/lokal/asset8.png",
    ],
    tags: [Category.GraphicDesign, Category.Event],
    // className: "bg-[#e61452]",
  },
  {
    id: "pdr",
    date: "2020.06",
    name: "punkt dobrych rozwiązań",
    thumbnail: "/images/pdr/thumbnail.png",
    shortDesc: "naming + branding",
    description:
      "<p>- identyfikacja wizualna dla firmy specjalizującej się w technologii naprawy karoserii samochodowej Paintless Dent Repair</p><p>- naming - czyli proces tworzenia nazwy marki</p>",
    assets: [
      "/images/pdr/asset1.png",
      "/images/pdr/asset2.png",
      "/images/pdr/asset3.png",
    ],
    tags: [Category.Branding, Category.Naming],
    className: "bg-[#4e4898]",
  },

  {
    id: "roastie",
    name: "Roastie",
    date: "2020",
    shortDesc: "branding",
    thumbnail: "/images/roastie/thumbnail.png",
    description:
      "identyfikacja wizualna dla irlandzkiej restauracji położonej w Middleton",
    assets: [
      "/images/roastie/asset1.png",
      "/images/roastie/asset2.png",
      "/images/roastie/asset3.png",
      "/images/roastie/asset4.png",
    ],
    tags: [Category.Branding],
  },
  {
    id: "digitape",
    name: "Digitape",
    date: "2019.06",
    shortDesc: "branding, www",
    thumbnail: "/images/digitape/thumbnail.png",
    assets: [
      "/images/digitape/asset1.png",
      "/images/digitape/asset2.png",
      "/images/digitape/asset3.png",
      "/images/digitape/asset4.png",
      "/images/digitape/asset5.png",
    ],
    description:
      "<p>- identyfikacja wizualna dla aplikacji archiwizującej materiały filmowe,</p> <p>- projekt strony www,</p><p>- materiały promocyjne, ulotka, baner</p>",
    tags: [Category.Website, Category.Branding, Category.GraphicDesign],
  },
  {
    id: "ads_green",
    name: "ADS Green",
    date: "2020.04",
    shortDesc: "branding, www",
    description:
      "- identyfikacja wizualna dla firmy fotowoltaicznej, <p>- projekt oraz wdrożenie strony www</p>",
    thumbnail: "/images/ads_green/thumbnail.png",
    assets: ["/images/ads_green/asset1.png", "/images/ads_green/asset2.png"],
    tags: [Category.Website, Category.Branding],
  },
  {
    id: "event",
    name: "Event Poster",
    date: "2015-2023",
    shortDesc: "seria plakatów eventowych",
    thumbnail: "/images/event/thumbnail.png",
    assets: [
      "/images/event/asset1.png",
      "/images/event/asset2.png",
      "/images/event/asset3.png",
      "/images/event/asset4.png",
      "/images/event/asset5.png",
      "/images/event/asset6.png",
      "/images/event/asset7.png",
    ],
    description: `Seria plakatów z lat 2015-2023, promujących wybrane wydarzenia kulturalne organizowane przez Stowarzyszenie ARTwarium <p>Celem stowarzyszenia jest prowadzenie działalności kulturalnej, medialnej, edukacyjnej, artystycznej oraz społecznej, </p>`,
    tags: [Category.GraphicDesign, Category.Event],
  },
  {
    id: "montii",
    name: "montii",
    date: "2023.02",
    shortDesc: "identyfikacja wizualna",
    thumbnail: "/images/montii/thumbnail.png",
    description:
      "identyfikacja wizualna dla kancelarii podatkowej / audytorskiej",
    tags: [Category.Branding],
    assets: [
      "/images/montii/asset1.png",
      "/images/montii/asset2.png",
      "/images/montii/asset3.png",
      "/images/montii/asset4.png",
    ],
  },

  {
    id: "historie_rodzinne",
    name: "historie rodzinne",
    shortDesc: "publikacja historyczna",
    date: "2024.06",
    description:
      "<p>książka historyczna wydana przez paniekolegoprojekt, obejmująca relacje z wydarzeń z połowy XX wieku (II wś, wysiedlenia, okupacja niemiecka), </p><p>wydana w 2024 roku w nakładzie 108 sztuk</p>",
    thumbnail: "/images/historie_rodzinne/thumbnail.png",
    assets: [
      "https://www.youtube.com/embed/cMMkpDd9gBw?si=rhxpvBa_c5k8Wts7&amp;controls=0",
      "/images/historie_rodzinne/asset1.png",
    ],
    tags: [Category.Literature, Category.GraphicDesign],
  },

  {
    id: "starszysyny",
    name: "starszysyny",
    date: "2022",
    description:
      "<p>- produkcja i wykonanie,</p> <p>- projekt okładki,</p><p>- montaż teledysków</p>",
    shortDesc: "album muzyczny",
    thumbnail: "/images/starszysyny/thumbnail.png",
    assets: [
      "/images/starszysyny/asset1.png",
      "https://www.youtube.com/embed/yNHWXxynUvs?si=CzwmKeGxdf3WiGVe",
      "https://www.youtube.com/embed/eSEA0T1byN0?si=ZdCw11WU-JnKKoE_",
    ],
    tags: [Category.Music, Category.GraphicDesign],
    className: "[&_img]:object-cover [&_img]:w-full",
  },
  {
    id: "szablony_lokalne",
    name: "Szablony LOKALne",
    shortDesc: "seria murali",
    date: "2022-2024",
    description: `<p>- seria 14 murali z postaciami zasłużonymi w walce o niepodległość,</p> 
    <p>namalowane na terenie miejscowości Bralin, wraz z tablicami informacyjnymi z biogramami, projekt krajobrazowy</p><p>strona internetowa z interaktywną mapą: <a class="underline text-ui-primary-blue" href='https://www.szablonylokalne.pl'>www.szablonylokalne.pl</a></p>`,
    tags: [Category.Graffiti, Category.Website],
    assets: [
      "https://www.youtube.com/embed/IdWoyn_0f7M?si=EvosHacTT-itmDuS&amp;controls=0",
      "/images/szablony/asset1.png",
      "/images/szablony/asset2.png",
      "/images/szablony/asset3.png",
      "/images/szablony/asset4.png",
      "/images/szablony/asset5.png",
      "/images/szablony/asset6.png",
    ],
    thumbnail: "/images/szablony/thumbnail.png",
  },
  {
    id: "nowoczesna_sypialnia",
    name: "nowoczesna sypialnia",
    date: "2020.05",
    thumbnail: "/images/nowoczesna_sypialnia/thumbnail.png",
    tags: [Category.Branding, Category.Website],
    description:
      "- identyfikacja wizualna dla firmy meblowej, <p>- projekt oraz wdrożenie strony www w oparciu o kreator</p>",
    assets: [
      "/images/nowoczesna_sypialnia/asset1.png",
      "/images/nowoczesna_sypialnia/asset2.png",
      "/images/nowoczesna_sypialnia/asset3.png",
      "/images/nowoczesna_sypialnia/asset4.png",
      "/images/nowoczesna_sypialnia/asset5.png",
    ],
  },
  {
    id: "kosa_projects",
    name: "kosa projects",
    shortDesc: "branding",
    date: "2024.02",
    description:
      "identyfikacja wizualna dla agencji marketingowej / biura kreacji projektów dotacyjnych, specjalizującej się w biznesie i sporcie, oraz marketingu 360° ",
    thumbnail: "/images/kosa/thumbnail.png",
    assets: [
      "/images/kosa/asset1.png",
      "/images/kosa/asset2.png",
      "/images/kosa/asset3.png",
    ],
    tags: [Category.Branding],
  },
  {
    id: "ewerestenergy",
    name: "ewerest energy",
    date: "2019.04",
    shortDesc: "identyfikacja wizualna",
    description:
      "- identyfikacja wizualna dla firmy zajmującej się instalacją fotowoltaiki",
    thumbnail: "/images/ewerest/thumbnail.png",
    assets: ["/images/ewerest/asset1.png", "/images/ewerest/asset2.png"],
    tags: [Category.Branding],
  },
  {
    id: "garbatelemury",
    name: "garbate lemury",
    date: "2017",
    shortDesc: "album muzyczny",
    thumbnail: "/images/garbate_lemury/thumbnail.png",
    assets: ["/images/garbate_lemury/asset1.png"],
    tags: [Category.GraphicDesign, Category.Music],
    description: `- projekt graficzny okładki, pudełka jak i samej płyty + przygotowanie do druku dla EP-ki punkrockowego zespołu garbate lemury, w którym odpowiadam za gitarę, chórki i słowa do kilku utworów. <p>- EP-kę „pocotamowa” nagraliśmy w 2017 roku, a za realizację nagrań odpowiadał chaos underground.</p>`,
  },
  {
    id: "szefner",
    name: "Szefner",
    shortDesc: "logo design",
    date: "2022",
    thumbnail: "/images/szefner/thumbnail.png",
    description:
      "logo dla zespołu muzycznego, oparte o wektoryzację odręcznego podpisu",
    assets: ["/images/szefner/asset1.png", "/images/szefner/asset2.png"],
    tags: [Category.Branding],
    className: "bg-black",
  },
  {
    id: "septymole",
    name: "septymole",
    date: "2018.07",
    shortDesc: "logo",
    thumbnail: "/images/septymole/thumbnail.png",
    description: "logo dla zespołu muzycznego",
    assets: ["/images/septymole/asset1.png", "/images/septymole/asset2.png"],
    tags: [Category.Branding],
  },
  {
    id: "t4m",
    name: "Twój Format Mebli",
    shortDesc: "identyfikacja wizualna",
    date: "2024.02",
    thumbnail: "/images/t4m/thumbnail.png",
    assets: ["/images/t4m/asset1.png", "/images/t4m/asset2.png"],
    description: "identyfikacja wizualna dla firmy stolarskiej",
    tags: [Category.Branding],
  },
  {
    id: "360",
    name: "360",
    date: "2016.09",
    thumbnail: "/images/360/thumbnail.png",
    shortDesc: "gra mobilna",
    assets: [
      "/images/360/thumbnail.png",
      "/images/360/asset1.png",
      "/images/360/asset2.png",
      "/images/360/asset3.png",
    ],
    description: `<p>- aplikacja mobilna, casualowa gierka na android,</p><p>napisana w całości w Pythonie, przez framework Kivy,</p>
    <p>- opublikowana w sklepie Google Play jako darmowa gierka w kwietniu 2016, dostępna do stycznia 2018</p>
    <p>- bardzo ważna dla mnie jako, że było to moje pierwsze autorskie oprogramowanie</p>
    `,
    tags: [Category.Software, Category.GraphicDesign],
    className: "bg-[#44464b]",
  },
  {
    id: "techdach",
    name: "TechDach",
    shortDesc: "identyfikacja wizualna",
    date: "2023.02",
    thumbnail: "/images/techdach/thumbnail.png",
    assets: ["/images/techdach/asset1.png", "/images/techdach/asset2.png"],
    description: "identyfikacja wizualna dla firmy dekarskiej",
    tags: [Category.Branding],
  },
];

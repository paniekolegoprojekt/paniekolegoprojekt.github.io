import { SectionProps } from "@/ui/molecules/Section/Section";
import { ProjectProps } from "../ui/types";

export enum Section {
  Software = "Software Development",
  Branding = "Branding",
  GraphicDesign = "Graphic Design",
  Art = "Art",
}

export enum ProjectType {
  Contract = "Contract",
  Web = "Web",
  Mobile = "Mobile App",
  Branding = "Branding",
  Naming = "Naming",
  Logo = "Logo Design",
  EventPoster = "Event Poster",
  Billboard = "Billboard",
  Graphics = "Graphics",
  Music = "Music",
  Literature = "Literature",
  Graffiti = "Graffiti",
}

export const projects: ProjectProps[] = [
  {
    section: Section.Software,
    name: "Travcorp",
    date: "2020-now",
    assets: [""],
    description:
      "- Współpraca przy tworzeniu dedykowanego systemu CMS, opartego na potrzebie obsługi jednocześnie wielu brandów, poprzez jedną bibliotekę komponentów",
    tags: [ProjectType.Contract],
  },
  {
    section: Section.Software,
    name: "Power Media",
    date: "2016-2020",
    assets: [""],
    description:
      "tworzenie platformy archiwizującej materiały video dla telewizji",
    tags: [ProjectType.Contract],
  },
  {
    section: Section.Software,
    name: "indem",
    date: "2023.09",
    description: `Identyfikacja wizualna dla firmy odszkodowawczej, 
    <p>- projekt oraz wdrożenie strony www,</p> 
    <p>- naming - czyli proces tworzenia nazwy marki,</p> 
    <p>- projekt dokumentów firmowych,</p>
    <p>- konfiguracja skrzynek mailowych dla całej firmy</p>`,
    assets: [
      "/images/indem/asset1.png",
      "/images/indem/asset2.png",
      "/images/indem/asset3.png",
      "/images/indem/asset4.png",
      "/images/indem/asset5.png",
    ],
    tags: [
      ProjectType.Web,
      ProjectType.Branding,
      ProjectType.Naming,
      "mailing",
    ],
  },
  {
    section: Section.Software,
    name: "Szablony LOKALne",
    date: "2025",
    description: `strona internetowa z interaktywną mapą szablonów: <a class="underline text-ui-primary-blue" href='https://www.szablonylokalne.pl'>www.szablonylokalne.pl</a></p>`,
    tags: [ProjectType.Graffiti, ProjectType.Web, "seria murali"],
    assets: [
      "https://www.youtube.com/embed/IdWoyn_0f7M?si=EvosHacTT-itmDuS&amp;controls=0",
      "/images/szablony/asset1.png",
      "/images/szablony/asset2.png",
      "/images/szablony/asset3.png",
      "/images/szablony/asset4.png",
      "/images/szablony/asset5.png",
      "/images/szablony/asset6.png",
    ],
  },
  {
    name: "ADS Buduje",
    section: Section.Branding,
    tags: [ProjectType.Branding],
    date: "2022.04",
    description:
      "<p>Identyfikacja wizualna dla sklepu z materiałami budowlanymi,</p><p>rozszerzenie rodziny marek ADS</p>",
    assets: [
      "/images/ads_buduje/asset1.png",
      "/images/ads_buduje/asset2.png",
      "/images/ads_buduje/asset3.png",
    ],
  },
  {
    section: Section.Branding,
    name: "sklep tapicera",
    date: "2020.02",
    description: "Identyfikacja wizualna dla sklepu z materiałami tapicerskimi",
    assets: [
      "/images/skleptapicera/asset1.png",
      "/images/skleptapicera/asset2.png",
      "/images/skleptapicera/asset3.png",
      "/images/skleptapicera/asset4.png",
    ],
    tags: [ProjectType.Branding],
  },

  {
    name: "lokal",
    section: Section.GraphicDesign,
    date: "2015-2023",
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
    tags: [ProjectType.Graphics, ProjectType.EventPoster],
  },
  {
    date: "2020.06",
    section: Section.Branding,
    name: "punkt dobrych rozwiązań",
    description:
      "<p>Identyfikacja wizualna dla firmy specjalizującej się w technologii naprawy karoserii samochodowej Paintless Dent Repair</p><p>- naming - czyli proces tworzenia nazwy marki</p>",
    assets: [
      "/images/pdr/asset1.png",
      "/images/pdr/asset2.png",
      "/images/pdr/asset3.png",
    ],
    tags: [ProjectType.Branding, ProjectType.Naming],
    className: "bg-[#4e4898]",
  },

  {
    name: "Roastie",
    section: Section.Branding,
    date: "2020",
    description:
      "Identyfikacja wizualna dla irlandzkiej restauracji położonej w Middleton",
    assets: [
      "/images/roastie/asset1.png",
      "/images/roastie/asset2.png",
      "/images/roastie/asset3.png",
      "/images/roastie/asset4.png",
    ],
    tags: [ProjectType.Branding],
  },

  {
    section: Section.Software,
    name: "ADS Green",
    date: "2020.04",
    description:
      "Identyfikacja wizualna dla firmy fotowoltaicznej, <p>- projekt oraz wdrożenie strony www</p>",
    assets: ["/images/ads_green/asset1.png", "/images/ads_green/asset2.png"],
    tags: [ProjectType.Web, ProjectType.Branding],
  },
  {
    name: "Digitape",
    section: Section.Software,
    date: "2019.06",
    assets: [
      "/images/digitape/asset1.png",
      "/images/digitape/asset2.png",
      "/images/digitape/asset3.png",
      "/images/digitape/asset4.png",
      "/images/digitape/asset5.png",
    ],
    description:
      "<p>-Identyfikacja wizualna dla aplikacji archiwizującej materiały filmowe,</p> <p>- projekt strony www,</p><p>- materiały promocyjne, ulotka, baner</p>",
    tags: [ProjectType.Web, ProjectType.Branding, ProjectType.Graphics],
  },
  {
    section: Section.GraphicDesign,
    name: "Artwarium",
    date: "2015-2023",
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
    tags: [ProjectType.Graphics, ProjectType.EventPoster],
  },
  {
    section: Section.Branding,
    name: "montii",
    date: "2023.02",
    description:
      "Identyfikacja wizualna dla kancelarii podatkowej / audytorskiej",
    tags: [ProjectType.Branding],
    assets: [
      "/images/montii/asset1.png",
      "/images/montii/asset2.png",
      "/images/montii/asset3.png",
      "/images/montii/asset4.png",
    ],
  },

  {
    section: Section.Art,
    name: "historie rodzinne",
    date: "2024.06",
    description:
      "<p>Książka historyczna wydana przez paniekolegoprojekt, obejmująca relacje z wydarzeń z połowy XX wieku (II wś, wysiedlenia, okupacja niemiecka), </p><p>wydana w 2024 roku w nakładzie 108 sztuk</p>",
    assets: [
      "https://www.youtube.com/embed/cMMkpDd9gBw?si=rhxpvBa_c5k8Wts7&amp;controls=0",
      "/images/historie_rodzinne/asset1.png",
    ],
    tags: [
      ProjectType.Literature,
      ProjectType.Graphics,
      "publikacja historyczna",
    ],
  },

  {
    section: Section.Art,
    name: "starszysyny",
    date: "2022",
    description:
      "<p>Produkcja i wykonanie,</p> <p>- projekt okładki,</p><p>- montaż teledysków</p>",
    assets: [
      "/images/starszysyny/asset1.png",
      "https://www.youtube.com/embed/yNHWXxynUvs?si=CzwmKeGxdf3WiGVe",
      "https://www.youtube.com/embed/eSEA0T1byN0?si=ZdCw11WU-JnKKoE_",
    ],
    tags: [ProjectType.Music, ProjectType.Graphics],
  },
  {
    section: Section.Art,
    name: "Szablony LOKALne",
    date: "2022-2026",
    description: `<p>Seria 14 murali z postaciami zasłużonymi w walce o niepodległość,</p> 
    <p>namalowane na terenie miejscowości Bralin, wraz z tablicami informacyjnymi z biogramami, projekt krajobrazowy</p><p>strona internetowa z interaktywną mapą: <a class="underline text-ui-primary-blue" href='https://www.szablonylokalne.pl'>www.szablonylokalne.pl</a></p>`,
    tags: [ProjectType.Graffiti, ProjectType.Web, "seria murali"],
    assets: [
      "https://www.youtube.com/embed/IdWoyn_0f7M?si=EvosHacTT-itmDuS&amp;controls=0",
      "/images/szablony/asset1.png",
      "/images/szablony/asset2.png",
      "/images/szablony/asset3.png",
      "/images/szablony/asset4.png",
      "/images/szablony/asset5.png",
      "/images/szablony/asset6.png",
    ],
  },
  {
    section: Section.Branding,
    name: "nowoczesna sypialnia",
    date: "2020.05",
    tags: [ProjectType.Branding, ProjectType.Web],
    description:
      "Identyfikacja wizualna dla firmy meblowej, <p>- projekt oraz wdrożenie strony www w oparciu o kreator</p>",
    assets: [
      "/images/nowoczesna_sypialnia/asset1.png",
      "/images/nowoczesna_sypialnia/asset2.png",
      "/images/nowoczesna_sypialnia/asset3.png",
      "/images/nowoczesna_sypialnia/asset4.png",
      "/images/nowoczesna_sypialnia/asset5.png",
    ],
  },
  {
    section: Section.Branding,
    name: "kosa projects",
    date: "2024.02",
    description:
      "Identyfikacja wizualna dla agencji marketingowej / biura kreacji projektów dotacyjnych, specjalizującej się w biznesie i sporcie, oraz marketingu 360° ",
    assets: [
      "/images/kosa/asset1.png",
      "/images/kosa/asset2.png",
      "/images/kosa/asset3.png",
    ],
    tags: [ProjectType.Branding],
  },
  {
    section: Section.Branding,
    name: "ewerest energy",
    date: "2019.04",
    description:
      "Identyfikacja wizualna dla firmy zajmującej się instalacją fotowoltaiki",
    assets: ["/images/ewerest/asset1.png", "/images/ewerest/asset2.png"],
    tags: [ProjectType.Branding],
  },
  {
    section: Section.Art,
    name: "garbate lemury",
    date: "2017",
    assets: [
      "/images/garbate_lemury/asset1.png",
      "https://www.youtube.com/embed/pQSvhxqT9i4?si=NOUgw67O6_UaUqt2",
    ],
    tags: [ProjectType.Graphics, ProjectType.Music],
    description: `Projekt graficzny okładki, pudełka jak i samej płyty + przygotowanie do druku dla EP-ki punkrockowego zespołu garbate lemury, w którym odpowiadam za gitarę, chórki i słowa do kilku utworów. <p>- EP-kę „pocotamowa” nagraliśmy w 2017 roku, a za realizację nagrań odpowiadał chaos underground.</p>`,
  },
  {
    section: Section.Branding,
    name: "Various projects",
    date: "2016-now",
    description: "Zebrane projekty znaków graficznych",
    assets: ["/images/szefner/asset1.png", "/images/szefner/asset2.png"],
    tags: [ProjectType.Logo],
  },
  {
    section: Section.Branding,
    name: "Twój Format Mebli",
    date: "2024.02",
    assets: ["/images/t4m/asset1.png", "/images/t4m/asset2.png"],
    description: "Identyfikacja wizualna dla firmy stolarskiej",
    tags: [ProjectType.Branding],
  },
  {
    section: Section.Software,
    name: "360",
    date: "2016.09",
    assets: [
      "/images/360/thumbnail.png",
      "/images/360/asset1.png",
      "/images/360/asset2.png",
      "/images/360/asset3.png",
    ],
    description: `<p>Aplikacja mobilna, casualowa gierka na android,</p><p>napisana w całości w Pythonie, przez framework Kivy,</p>
    <p>Opublikowana w sklepie Google Play jako darmowa gierka w kwietniu 2016, dostępna do stycznia 2018</p>
    <p>Bardzo ważna dla mnie jako, że było to moje pierwsze autorskie oprogramowanie</p>
    `,
    tags: [ProjectType.Mobile, ProjectType.Graphics, "gra casualowa"],
  },
  {
    section: Section.Branding,
    name: "TechDach",
    date: "2023.02",
    assets: ["/images/techdach/asset1.png", "/images/techdach/asset2.png"],
    description: "Identyfikacja wizualna dla firmy dekarskiej",
    tags: [ProjectType.Branding],
  },
];

export const sections: SectionProps[] = [
  {
    title: Section.Software,
    color: "#D78282",
    desc: `W 2026 przy dynamicznym rozwoju narzędzi AI, moje podejście
              projektowe niezmiennie bazuje na sprawdzonych przez lata zasadach
              pisania czystego = stabilnego oprogramowania. Kod częściej się
              czyta (utrzymuje) niż pisze. Łatwiej utrzymywać niewielką ilość
              kodu. Linijek kodu powinno być tak mało jak to tylko możliwe, do
              momentu utraty jego czytelności. Zwięzłość, stabilność i
              czytelność oprogramowania najłatwiej jest mi osiągnąć w
              paradygmacie funkcyjnym, przy dobrze otypowanych abstrakcjach i
              zrozumieniu logiki biznesowej danego projektu.`,
    projects: projects.filter(
      (project) => project.section === Section.Software,
    ),
  },
  {
    title: Section.Branding,
    color: "#254B5C",
    desc: `Proces tworzenia identyfikacji wizualnej rozpoczynam od szeroko zakrojonego wywiadu tzw. 
    briefing-u, który pozwala mi ustalić realne potrzeby mojego klienta, możliwe problemy i rozwiązania, 
    które nastąpią już w czasie końcowego projektowania. Satysfakcję ze swojej pracy w tej dziedzinie odczuwam 
    tylko i wyłącznie kiedy z projektu jesteśmy zadowoleni oboje ja jako wykonawca oraz klient. Swoje portfolio 
    udało mi się zbudować na wielu zróżnicowanych realizacjach, od kompleksowego zaprojektowania marki 
    (począwszy od namingu, czyli procesu wymyślenia nazwy), po projekt identyfikacji wizualnej, dokumentów firmowych, 
    sygnetu, czy nawet metki odzieżowej. Zależy mi na tym, żeby klient rozumiał jak ważne jest staranne, zgodne 
    z brandbookiem, używanie nie tylko znaku, ale całości zaprojektowanej tożsamości czyli corporate identity.`,
    projects: projects.filter(
      (project) => project.section === Section.Branding,
    ),
  },
  {
    title: Section.GraphicDesign,
    color: "#3B4D81",
    desc: `Przy projektowaniu graficznym skupiam się na połączeniu odpowiedniej architektury informacji (ekspozycja najistotniejszych komunikatów) 
    i estetyki, która oprócz zaoferowania czegoś ciekawego dla oka, trudnego do zignorowania, ma w sobie humor, zgrywę i dystans. Staram się, 
    żeby moje projekty w subtelny sposób niosły za sobą drugie dno, były niezaprzeczalnie autorskie i bazowały na czystej, czytelnej typografii.`,
    projects: projects.filter(
      (project) => project.section === Section.GraphicDesign,
    ),
  },
  {
    title: Section.Art,
    color: "#59C9A5",
    desc: `Nie mam pretensji do określania się muzykiem, pisarzem czy malarzem, ale w trakcie swojej działalności udało mi się 
    zrealizować kilka ciekawych projektów z efektami, które dały mi jakąś satysfakcję. Niezależnie czy była to praca badawczo-historyczna 
    przy wydaniu małej książeczki historycznej “Historie rodzinne”, szablony graffiti w mojej rodzinnej miejscowości czy autorskie utwory muzyczne,
    w każdym tym przypadku czułem potrzebę realizacji tych pomysłów, niezależnie od kosztów finansowych czy czasowych. `,
    projects: projects.filter((project) => project.section === Section.Art),
  },
];

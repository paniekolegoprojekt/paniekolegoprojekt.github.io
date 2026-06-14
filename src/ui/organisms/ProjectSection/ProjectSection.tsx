export const Section = () => {
  return (
    <div className="w-full m-auto bg-ui-light-grey py-4 lg:py-8" id="projects">
      <div className="md:max-w-[1000px] w-full m-auto ">
        <div className="paragraph-m lg:paragraph-xl  mx-8 my-4">
          <p className="title-xl">Projekty</p>
          <p className="mt-4">
            Masz dla mnie ciekawy projekt, szukasz kogoś do współpracy? <br />
            Daj znać, odezwę się tak szybko jak to tylko możliwe.
          </p>
          <a
            href="mailto:erykrozdolski@gmail.com"
            className="text-ui-primary-blue my-2 block"
          >
            [erykrozdolski@gmail.com]
          </a>
        </div>
      </div>
    </div>
  );
};

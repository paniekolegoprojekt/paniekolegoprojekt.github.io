import { Text } from "atoms";

export const ContactSection = () => {
  return (
    <div
      className="bg-black text-white lg:text-ui-dark xxl:w-[1580px] w-full m-auto lg:bg-ui-light-grey p-4 xl:py-16 xl:px-16"
      id="contact"
    >
      <div className="paragraph-s m-auto gap-4 grid justify-center">
        <Text
          className="lg:title-2xl title-xl mb-4 text-ui-primary-grey"
          text="KONTAKT"
        />

        <div className="mx-0 lg:mx-8 xl:mx-[20vw] grid gap-4">
          <Text
            className="title-m xl:title-2xl"
            text="
          Masz dla mnie ciekawy projekt, szukasz kogoś do współpracy, daj znać,
          odezwę się tak szybko jak to tylko możliwe
          "
          />
          <Text
            text="erykrozdolski@gmail.com"
            className="xl:paragraph-xl paragraph-m uppercase"
          />
          <Text
            text="Copyright Panie Kolego Projekt 2024"
            className="label-s capitalize"
          />
        </div>
      </div>
    </div>
  );
};

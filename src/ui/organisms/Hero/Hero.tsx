import { NavLink } from "@/ui/molecules/NavLink/NavLink";
import { Text } from "atoms";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <img
        src="shared/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="h-40 absolute ml-12 mt-12 z-20"
      />
      <video
        className="absolute inset-0 w-full object-cover h-screen"
        src="shared/herovideo1.mp4"
        autoPlay={true}
        controls={false}
        muted={true}
        loop
      />
      <div className="gap-2 xl:gap-16 z-20 absolute right-16 top-10 xl:top-20 text-black xl:flex grid">
        <NavLink text="PROJEKTY" href="#projects" />
        <NavLink text="O MNIE" href="#aboutme" />
        <NavLink text="KONTAKT" href="#contact" />
      </div>
      <div className="absolute inset-0 m-auto w-[300px] h-20 text-center bottom-0 mb-0 ">
        <Text className="paragraph-xl " text="Eryk Rozdolski" />
        <Text
          className="paragraph-m text-ui-primary-grey"
          text="projektant / software developer"
        />
      </div>
    </div>
  );
};

export default Hero;

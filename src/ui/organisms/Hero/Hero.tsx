import { Text } from "atoms";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <img
        src="shared/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="h-16 lg:h-32 absolute ml-12 mt-12 z-20"
      />
      <video
        className="absolute inset-0 w-full object-cover mt-[-100px]"
        src="shared/herovideo.mp4"
        autoPlay={true}
        controls={false}
        muted={true}
        loop
      />
      <div className="gap-8 z-20 absolute right-8 top-8 text-black flex">
        <a href="#projects">
          <Text className="title-m uppercase" text="Projekty" />
        </a>
        <a href="#projects">
          <Text className="title-m uppercase" text="O mnie" />
        </a>
        <a href="#projects">
          <Text className="title-m uppercase" text="Kontakt" />
        </a>
      </div>
      <div className="absolute right-[20%] bottom-[25%]">
        <Text className="paragraph-m text-white" text="Eryk Rozdolski" />
        <Text
          className="paragraph-m text-ui-primary-grey"
          text="projektant / software developer"
        />
      </div>
    </div>
  );
};

export default Hero;

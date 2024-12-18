import { Text } from "atoms";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <img
        src="shared/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="lg:h-30 h-32 ml-0 lg:ml-12 absolute mt-12 z-20 animate-fadeInSlow"
      />
      <video
        className="absolute inset-0 w-full object-cover h-screen"
        src="shared/herovideo1.mp4"
        autoPlay={true}
        controls={false}
        muted={true}
        loop
      />
      <div className="absolute inset-0 m-auto w-[300px] h-20 text-center bottom-0 mb-0 animate-fadeInSlow">
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

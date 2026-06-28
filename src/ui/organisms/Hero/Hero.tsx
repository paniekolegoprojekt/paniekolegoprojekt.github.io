import { LangSwitch } from "@/ui/molecules/LangSwitch/LangSwitch";

export const Hero = () => (
  <div className="h-screen relative flex justify-center">
    <div className="bg-white absolute bottom-0 w-full h-4 z-10" />
    <video
      className="absolute inset-0 w-full h-full object-cover block"
      src="shared/hero.mp4"
      autoPlay
      controls={false}
      muted
      loop
    />
    <div className="xl:w-[1200px] w-full grid ml-auto mr-auto">
      <div className="sticky h-36 xl:h-fit top-0 flex w-full justify-between px-6 py-4">
        <img
          src="shared/logo.svg"
          alt="logo"
          width={200}
          height={200}
          className="animate-fadeIn -ml-8 xl:-ml-6"
        />
        <LangSwitch />
      </div>
    </div>
  </div>
);

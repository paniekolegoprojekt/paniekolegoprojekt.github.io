import { LangSwitch } from "@/ui/molecules/LangSwitch/LangSwitch";
import { twMerge } from "tailwind-merge";

export const Hero = () => {
  return (
    <div className="h-screen relative flex justify-center ease-in-out transition-all animate-fadeIn">
      <div className="bg-white absolute bottom-0 w-full h-4 z-10" />
      <video
        className={twMerge(
          "absolute inset-0 w-full h-full object-cover block ease-in-out transition-all",
        )}
        poster="/shared/poster.webp"
        src="shared/hero.webm"
        autoPlay
        controls={false}
        preload="auto"
        muted
        loop
      />
      <div className="xl:w-[1200px] w-full grid ml-auto mr-auto">
        <div className="sticky h-36 xl:h-fit xl:top-4 top-8 flex w-full justify-between px-6 py-4">
          <img
            src="shared/logo.svg"
            fetchPriority="high"
            alt="logo"
            width={200}
            height={200}
            className="animate-fadeIn -ml-8 xl:-ml-6"
            loading="eager"
          />
          <LangSwitch />
        </div>
      </div>
    </div>
  );
};

import { Text } from "atoms";

export const Hero = () => (
  <div className="h-screen overflow-hidden relative">
    <video
      className="absolute inset-0 w-full h-full object-cover block scale-[1.01]"
      src="shared/herovideo1.mp4"
      autoPlay
      controls={false}
      muted
      loop
    />
    <div className="absolute flex w-full justify-between px-6 py-4">
      <img
        src="shared/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="animate-fadeIn"
      />
      <div className="flex gap-2">
        <Text className="paragraph-xl " text="PL" />
        <Text className="paragraph-xl " text="|" />
        <Text className="paragraph-xl " text="EN" />
      </div>
    </div>
  </div>
);

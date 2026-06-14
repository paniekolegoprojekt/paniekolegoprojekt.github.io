import { VideoPlayer } from "@/ui/atoms";
import { MediaProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Media = ({ url, className }: MediaProps) => (
  <div className="self-center items-center justify-center">
    <div
      className={twMerge(
        "grid grid-flow-col auto-cols-1-slides h-auto",
        className,
      )}
    >
      {url.includes("youtube") ? (
        <VideoPlayer src={url} />
      ) : (
        <img src={url} alt={url} width="1600" height="900" loading="eager" />
      )}
    </div>
  </div>
);

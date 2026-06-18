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
      ) : url ? (
        <img
          className={twMerge(
            "max-h-[75vh] xl:max-h-auto w-full object-cover",
            className,
          )}
          src={url}
          alt={url}
          width="1600"
          height="900"
          loading="eager"
        />
      ) : null}
    </div>
  </div>
);

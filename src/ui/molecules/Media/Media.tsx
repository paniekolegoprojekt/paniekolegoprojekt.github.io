import { VideoPlayer } from "@/ui/atoms";
import { MediaProps } from "./types";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const Media = ({ url, className }: MediaProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="self-center items-center justify-center ease-in-out transition-all animate-fadeIn">
      <div
        className={twMerge("grid grid-flow-col auto-cols-1-slides", className)}
      >
        {url.includes("youtube") ? (
          <VideoPlayer src={url} />
        ) : url ? (
          <img
            style={{ opacity: loaded ? 1 : 0.5 }}
            onLoad={() => setLoaded(true)}
            className={twMerge(
              "xl:max-h-auto w-full object-cover ease-in-out transition-all animate-fadeIn",
              className,
            )}
            src={url}
            alt={url}
            width="900"
            height="900"
            loading="eager"
          />
        ) : null}
      </div>
    </div>
  );
};

import { VideoPlayer } from "@/ui/atoms";
import { MediaProps } from "./types";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

const useImage = (src: string) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);
  return loaded;
};

export const Media = ({ url, className }: MediaProps) => {
  const loaded = useImage(url);
  return (
    <div className="self-center items-center justify-center ease-in-out transition-all animate-fadeIn">
      <div
        className={twMerge("grid grid-flow-col auto-cols-1-slides", className)}
      >
        {url.includes("youtube") ? (
          <VideoPlayer src={url} />
        ) : loaded ? (
          <img
            style={{ opacity: loaded ? 1 : 0.5 }}
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
        ) : (
          <div className="flex justify-center content-center">
            <ArrowPathIcon className="animate-spin h-3 w-3" />
          </div>
        )}
      </div>
    </div>
  );
};

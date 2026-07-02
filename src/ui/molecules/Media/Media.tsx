import { VideoPlayer } from "atoms";
import { MediaProps } from "./types";
import { twMerge } from "tailwind-merge";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { useImage } from "@/hooks/useImage";

export const Media = ({ url, className }: MediaProps) => {
  const loaded = useImage(url);
  const isVideo = url.includes("youtube");
  return (
    <div className="self-center items-center justify-center ease-in-out transition-all animate-fadeIn">
      <div
        className={twMerge("grid grid-flow-col auto-cols-1-slides", className)}
      >
        {isVideo && <VideoPlayer src={url} />}
        {!isVideo && (
          <img
            className={twMerge(
              "xl:max-h-auto w-full object-cover ease-in-out transition-all animate-fadeIn",
              className,
              loaded ? "opacity-100" : "opacity-0",
            )}
            src={url}
            alt={url}
            width="900"
            height="900"
          />
        )}
        {!loaded && !isVideo && (
          <div className="flex justify-center content-center w-full h-auto aspect-square items-center">
            <ArrowPathIcon className="animate-spin h-8 w-8 text-ui-primary-grey" />
          </div>
        )}
      </div>
    </div>
  );
};

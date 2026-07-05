import { VideoPlayer, Loader } from "atoms";
import { MediaProps } from "./types";
import { twMerge } from "tailwind-merge";
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
        {!isVideo && loaded && (
          <img
            className={twMerge(
              "xl:max-h-auto w-full object-cover ease-in-out transition-all animate-fadeIn",
              className,
            )}
            src={url}
            alt={url}
            width="600"
            height="600"
          />
        )}
        {!loaded && !isVideo && <Loader />}
      </div>
    </div>
  );
};

export default Media;

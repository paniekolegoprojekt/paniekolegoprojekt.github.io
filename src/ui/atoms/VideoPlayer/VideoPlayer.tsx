import { twMerge } from "tailwind-merge";
import { VideoPlayerProps } from "./types";

export const VideoPlayer = ({
  src,
  className,
  videoProps,
}: VideoPlayerProps) => (
  <iframe
    width="100%"
    height="315"
    className={twMerge("aspect-square", className)}
    src={src}
    loading="eager"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    {...videoProps}
  ></iframe>
);

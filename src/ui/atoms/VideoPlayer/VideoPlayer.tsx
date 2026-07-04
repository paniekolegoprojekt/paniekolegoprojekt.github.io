import { VideoPlayerProps } from "./types";

export const VideoPlayer = ({ src, videoProps }: VideoPlayerProps) => (
  <iframe
    width="100%"
    height="315"
    className="aspect-square"
    src={src}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    {...videoProps}
  ></iframe>
);

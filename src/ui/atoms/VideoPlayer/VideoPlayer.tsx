import { twMerge } from "tailwind-merge";

export const VideoPlayer = ({
  src,
  className,
  videoProps,
}: {
  src: string;
  className?: string;
  videoProps?: { autoplay?: boolean; controls?: boolean };
}) => {
  return (
    <iframe
      width="100%"
      height="315"
      className={twMerge("aspect-video", className)}
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      {...videoProps}
    ></iframe>
  );
};

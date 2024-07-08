export const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <iframe
      width="100%"
      height="315"
      className="aspect-video"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

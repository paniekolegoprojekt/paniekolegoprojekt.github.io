import { VideoPlayer } from "@/ui/atoms";
import { MediaProps } from "./types";

const Media = ({ url }: MediaProps) => (
  <div className="self-center items-center">
    <div className="grid grid-flow-col auto-cols-1-slides justify-center items-center h-auto lg:h-screen">
      {url.includes("youtube") ? (
        <VideoPlayer src={url} />
      ) : (
        <img
          src={url}
          alt={url}
          width="1600"
          height="900"
          className="w-auto max-h-[100vh]"
        />
      )}
    </div>
  </div>
);

export default Media;

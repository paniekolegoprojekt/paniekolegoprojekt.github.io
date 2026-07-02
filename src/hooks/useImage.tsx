import { useEffect, useState } from "react";

export const useImage = (src: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      console.log("Image loaded:", src);
      setLoaded(true);
    };
  }, [src]);
  return loaded;
};

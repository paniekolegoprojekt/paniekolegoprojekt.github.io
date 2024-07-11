import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { CarouselProps } from "./types";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

export const Carousel = ({ children, className }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: false,
    loop: true,
    slidesToScroll: 1,
  });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  return (
    <div className={twMerge("relative", className)}>
      <button
        className="absolute left-0 p-4 bottom-0 top-0 m-auto cursor-pointer z-30"
        onClick={scrollPrev}
      >
        <ArrowLeftCircleIcon className="h-8" />
      </button>
      <button
        className="absolute right-0 p-4 bottom-0 top-0 m-auto cursor-pointer z-30"
        onClick={scrollNext}
      >
        <ArrowRightCircleIcon className="h-8" />
      </button>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="grid grid-flow-col" style={{ gridAutoColumns: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

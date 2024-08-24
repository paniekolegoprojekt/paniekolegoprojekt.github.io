import useEmblaCarousel from "embla-carousel-react";
import { CarouselProps } from "./types";
import { twMerge } from "tailwind-merge";
import React from "react";
import { ArrowBtn } from "./blocks/ArrowBtn/ArrowBtn";
import { usePrevNextButtons } from "./uitls/usePrevNextButtons";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";

export const Carousel = ({ children, className }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: false,
    loop: true,
    slidesToScroll: 1,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return React.Children.count(children) > 1 ? (
    <div className={twMerge("relative", className)}>
      <ArrowBtn
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="left-0"
      >
        <ArrowLeftCircleIcon className="h-8" />
      </ArrowBtn>
      <ArrowBtn
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="right-0"
      >
        <ArrowRightCircleIcon className="h-8" />
      </ArrowBtn>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="grid grid-flow-col" style={{ gridAutoColumns: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  ) : (
    <div className={className}>{children}</div>
  );
};

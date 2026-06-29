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

export const Carousel = ({ children, className, style }: CarouselProps) => {
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
    <div
      className={twMerge("flex w-full bg-white relative", className)}
      style={style}
    >
      <ArrowBtn
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="bg-[linear-gradient(to_left,rgba(255,0,0,0),rgba(0,0,0,0.25))]"
      >
        <ArrowLeftCircleIcon
          className={twMerge("h-8", "fill-[--section-color]")}
        />
      </ArrowBtn>
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="grid grid-flow-col" style={{ gridAutoColumns: "100%" }}>
          {children}
        </div>
      </div>
      <ArrowBtn
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="right-0 bg-[linear-gradient(to_right,rgba(255,0,0,0),rgba(0,0,0,0.25))]"
      >
        <ArrowRightCircleIcon
          className={twMerge("h-8", "fill-[--section-color]")}
        />
      </ArrowBtn>
    </div>
  ) : (
    <div className={className}>{children}</div>
  );
};

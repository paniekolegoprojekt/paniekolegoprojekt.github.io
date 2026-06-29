import { ComponentType } from "@/ui/types";
import { PropsWithChildren } from "react";

export type CarouselProps = PropsWithChildren &
  ComponentType & { arrowClassName?: string };

import { PropsWithChildren, Suspense } from "react";
import { Loader } from "@/ui/atoms/Loader/Loader";

export const SuspenseLoader = ({ children }: PropsWithChildren) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

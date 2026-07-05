import { PropsWithChildren, Suspense } from "react";
import { Loader } from "atoms";

export const SuspenseLoader = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export const ArrowBtn = (props: ComponentPropsWithRef<"button">) => {
  const { disabled, children, className, ...restProps } = props;

  return (
    <button
      className={twMerge(
        "absolute p-4 bottom-0 top-0 m-auto cursor-pointer z-30 [&>svg]:fill-ui-primary-blue",
        className,
        disabled && "[&>svg]:fill-ui-primary-grey"
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

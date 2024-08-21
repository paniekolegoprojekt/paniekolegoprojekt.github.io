import { twMerge } from "tailwind-merge";
import { ClearFilterBtnProps } from "./types";
import { XMarkIcon } from "@heroicons/react/16/solid";

const ClearFilterBtn = ({ onClick, visible }: ClearFilterBtnProps) => {
  return (
    <button
      className={twMerge(
        "hidden border-ui-primary-grey border transition-opacity ease-linear bg-ui-primary-grey solid p-2 xl:px-8 xl:py-4 uppercase rounded-md xl:label-xl label-s items-center justify-center gap-1",
        visible ? "flex opacity-100" : "flex opacity-0"
      )}
      onClick={onClick}
    >
      <XMarkIcon className="h-4 fill-[#777]" />
      Wyczyść filtry
    </button>
  );
};

export default ClearFilterBtn;

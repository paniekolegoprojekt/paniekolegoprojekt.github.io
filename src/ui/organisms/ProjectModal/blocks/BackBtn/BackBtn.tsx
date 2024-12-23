import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { Text } from "@/ui/atoms";
import { BackBtnProps } from "./types";

const BackBtn = ({ closeModal, cx }: BackBtnProps) => {
  return (
    <button
      className={twMerge(
        "flex mt-4 border-ui-primary-grey border ease-linear bg-white solid p-2 xl:px-4 xl:py-3 uppercase rounded-md xl:label-xl label-s items-center justify-center gap-1 outline-none hover:text-ui-dark hover:border-ui-light-grey transition-all",
        cx
      )}
      onClick={closeModal}
    >
      <ArrowLeftIcon className="h-4" />
      <Text text="wróć do listy projektów" />
    </button>
  );
};

export default BackBtn;

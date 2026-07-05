import ArrowPathIcon from "@heroicons/react/16/solid/ArrowPathIcon";

export const Loader = () => {
  return (
    <div className="flex justify-center content-center w-full h-auto aspect-square items-center">
      <ArrowPathIcon className="animate-spin h-8 w-8 text-ui-primary-grey" />
    </div>
  );
};

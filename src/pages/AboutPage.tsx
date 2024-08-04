import { Sidebar } from "../ui/molecules";

export const AboutPage = () => {
  return (
    <main className="grid grid-cols-12 bg-ui-polar gap-4">
      <Sidebar className="col-span-12 lg:col-span-2" />
      <div className="lg:col-span-10 col-span-12 bg-ui-light-grey grid grid-cols-12 gap-4 border-l solid border-ui-grey h-[calc(90vh_-2rem)] overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  col-span-12 p-8">
          <img
            src="/images/about/about.jpg"
            alt="logo"
            width={1600}
            height={900}
            className="w-100% h-auto mr-auto rounded-xl p-4"
          />
        </div>
      </div>
    </main>
  );
};

import { Sidebar } from "@/ui/molecules";
import Image from "next/image";
import { Text } from "@atoms";
import { EnvelopeOpenIcon } from "@heroicons/react/24/solid";
export default function Layout() {
  return (
    <main className="grid grid-cols-12 bg-ui-polar gap-4">
      <Sidebar className="col-span-12 lg:col-span-2" />
      <div className="lg:col-span-10 col-span-12 bg-ui-light-grey grid grid-cols-12 gap-4 border-l solid border-ui-grey h-[calc(100vh_-2rem_-8vh)] overflow-auto">
        <div className="grid col-span-12 p-8 text-left lg:text-center m-0 lg:m-auto relative">
          <EnvelopeOpenIcon className="h-[50%] w-auto absolute m-auto inset-0 fill-ui-primary-grey" />
          <div className="p-4 lg:p-8 z-10">
            <Text className="title-l mb-4" text="Skontaktuj się ze mną" />
            <div className="paragraph-s mb-4">
              Masz dla mnie ciekawy projekt, szukać kogoś do współpracy,
              <p>daj znać, odezwę się tak szybko jak to tylko możliwe</p>
            </div>
            <div className="flex gap-2 items-center lg:justify-center">
              <Text className="title-s mb-4" text="email" />
              <Text
                className="paragraph-s mb-4"
                text="erykrozdolski@gmail.com"
              />
            </div>
            <div className="flex gap-2 items-center lg:justify-center">
              <Text className="title-s mb-4" text="telefon" />
              <Text className="paragraph-s mb-4" text="664193740" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import React from "react";
import ProjectList from "../ui/organisms/ProjectList/ProjectList";
import { Sidebar } from "@molecules";
import { projects } from "../const/const";

export default function Layout() {
  return (
    <main className="grid grid-cols-12 bg-ui-polar gap-4">
      <Sidebar className="col-span-3" />
      <div className="col-span-9 bg-ui-light-grey grid grid-cols-12 gap-4">
        <ProjectList cards={projects} />
      </div>
    </main>
  );
}

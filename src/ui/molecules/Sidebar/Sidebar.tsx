import Image from "next/image";
import React from "react";
import { SidebarProps } from "./types";
import { twMerge } from "tailwind-merge";
import { categories } from "@/const/const";
import { Tag, Text } from "@atoms";
import Link from "next/link";

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={twMerge(className, "bg-white p-6 min-h-screen")}>
      <Image
        src="shared/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="h-32 w-auto mb-4"
      />
      <div className="gap-3 grid">
        <Text text="Projekty" className="title-s uppercase" />
        {Object.values(categories).map((category) => (
          <Tag className={"label-m"} text={category.name} key={category.name} />
        ))}
        <Link className="mt-8" href="/about">
          <Text text="O mnie" className="title-s uppercase" />
        </Link>
        <Link href="/kontakt">
          <Text text="Kontakt" className="title-s uppercase" />
        </Link>
        <Text text="Copyright Panie Kolego Projekt 2024" className="label-m" />
      </div>
    </div>
  );
};

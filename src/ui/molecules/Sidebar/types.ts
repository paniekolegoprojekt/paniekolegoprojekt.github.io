import { Category } from "@/ui/types";
import { Dispatch, SetStateAction } from "react";

export type SidebarProps = {
  className?: string;
  filterByCategory?: Dispatch<SetStateAction<Category[]>>;
  filteredCategories?: Category[];
  showCategories?: boolean;
};

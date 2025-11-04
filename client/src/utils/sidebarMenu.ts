import { Home, LucideIcon, Notebook } from "lucide-react";

export interface menuItems {
  url: string;
  name: string;
  icon?: LucideIcon;
}

export const Menu: menuItems[] = [
  {
    url: "/dashboard",
    name: "Dashboard",
    icon: Home
  },
  {
    url: "/projects",
    name: "Projects",
    icon: Notebook
  },
];


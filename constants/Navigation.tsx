import { Home, Search, PlusSquare, User } from "lucide-react";

export enum NavTabs {
  HOME="/",
  SEARCH="/search",
  NEW_POST="/create-post",
  PROFILE="/profile"
}

export const navigationRoutes = [
    {
        value: NavTabs.HOME,
        icon: Home,
    },
    {
        value: NavTabs.SEARCH,
        icon: Search,
    },
    {
        value: NavTabs.NEW_POST,
        icon: PlusSquare,
    },
    {
        value: NavTabs.PROFILE,
        icon: User,
    },
]

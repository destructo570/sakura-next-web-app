import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

export enum NavTabs {
  HOME="home",
  SEARCH="search",
  NEW_POST="new_post",
  FAVORITE="favorite",
  PROFILE="profile"
}

export const navigationRoutes = [
    {
        value: NavTabs.HOME,
        icon: Home,
        route: "home"
    },
    {
        value: NavTabs.SEARCH,
        icon: Search,
        route: "search"
    },
    {
        value: NavTabs.NEW_POST,
        icon: PlusSquare,
        route: "new-post"
    },
    {
        value: NavTabs.FAVORITE,
        icon: Heart,
        route: "favorite"
    },
    {
        value: NavTabs.PROFILE,
        icon: User,
        route: "profile"
    },
]

import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

export enum NavTabs {
  HOME="home",
  SEARCH="search",
  NEW_POST="create-post",
  FAVORITE="activity",
  PROFILE="profile"
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
        value: NavTabs.FAVORITE,
        icon: Heart,
    },
    {
        value: NavTabs.PROFILE,
        icon: User,
    },
]

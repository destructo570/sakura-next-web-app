import { Home, Search, PlusSquare, Heart, User, MessageSquareText } from "lucide-react";

export enum NavTabs {
  HOME="/",
  SEARCH="/search",
  NEW_POST="/create-post",
  MESSAGE="/message",
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
        value: NavTabs.MESSAGE,
        icon: MessageSquareText,
    },
    {
        value: NavTabs.PROFILE,
        icon: User,
    },
]

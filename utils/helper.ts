import { NavTabs } from "@/constants/Navigation";
import dayjs from "dayjs";
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

export const getUserInitials = (name: string) => {
  const name_arr = name.split(" ");
  if (!name_arr?.length) return name;

  if (name_arr?.length > 1) {
    return `${name_arr[0].charAt(0)}${name_arr[1].charAt(0)}`;
  } else {
    name_arr[0].charAt(0);
  }
};

export function debounce(func: Function, wait: number, immediate: boolean) {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function (this: any) {
    let context = this,
      args = arguments;
    clearTimeout(timeout ?? undefined);
    if (immediate && !timeout) func.apply(context, args);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
  };
}

export const getRedirectUrl = (callbackUrl: string) => {
  return `/api/auth/signin?callbackUrl=/${callbackUrl}`;
};

export const getInitialTabValue = (pathname: string) => {
  let result;
  for (const [_, value] of Object.entries(NavTabs)) {
    if (value !== "/" && pathname.includes(value)) {
      result = value;
      break;
    }
  }
  return result ?? NavTabs.HOME;
};

export const getFormattedDurationString = (timeStamp: string) => {
  let formatted_str = dayjs(timeStamp).utc().format("DD MMM YYYY");
  const date1 = dayjs(timeStamp).utc();
  const date2 = dayjs().utc();
  const minute_diff = date2.diff(date1, "minute");
  const hour_diff = date2.diff(date1, "hour");  

  if (minute_diff >= 0 && minute_diff <= 59) {
    formatted_str = `${minute_diff}m ago`;
  } else if (hour_diff >= 1 && hour_diff <= 6) {
    formatted_str = `${hour_diff}h ago`;
  }

  return formatted_str;
};

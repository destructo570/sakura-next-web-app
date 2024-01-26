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

export const getUserInitials = (name: string) => {
  const name_arr = name.split(" ");
  if (!name_arr?.length) return name;

  if (name_arr?.length > 1) {
    return `${name_arr[0].charAt(0)}${name_arr[1].charAt(0)}`;
  } else {
    name_arr[0].charAt(0);
  }
};

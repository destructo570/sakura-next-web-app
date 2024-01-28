"use server";

import { signIn, signOut } from "@/auth/auth";

export const signInUser = () => {
  return signIn("github");
};
export const signOutUser = () => {
  return signOut();
};

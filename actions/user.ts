"use server";
import { auth } from "@/auth/auth";
import { db } from "@/database";
import { users } from "@/database/schema/users";
import { action } from "@/utils/safe-action";
import { eq, like } from "drizzle-orm";
import { z } from "zod";

//======================
//==== Search User =====
//======================

const SearchUserSchema = z.object({
  query: z.string(),
});

type SearchUserSchema = z.infer<typeof SearchUserSchema>;

const _searchUser = async (params: SearchUserSchema) => {
  let people_list;
  if (params?.query?.length) {
    people_list = await db
      .select()
      .from(users)
      .where(like(users.name, `%${params.query}%`));
  } else {
    people_list = await db.select().from(users).limit(100);
  }
  return people_list;
};

export const searchUser = action(SearchUserSchema, _searchUser);

//===========================
//==== Update User Data =====
//===========================

const UpdateUserSchema = z.object({
  bio: z.string(),
});

type UpdateUserSchema = z.infer<typeof UpdateUserSchema>;

const _updateUserData = async (params: UpdateUserSchema) => {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  };

  await db
    .update(users)
    .set({
      bio: params.bio,
    })
    .where(eq(users.id, session.user.id));
};

export const updateUserData = action(UpdateUserSchema, _updateUserData);
